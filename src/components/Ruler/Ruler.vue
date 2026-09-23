<script setup lang="ts">
    import { computed, ref, useTemplateRef, watch } from 'vue';
    import type { RulerEmits, RulerProps } from '.';
    import { useThrottleFn } from '@vueuse/core';
    
    const props = withDefaults(defineProps<RulerProps>(), {})
    const model = defineModel<number>()
    const emits = defineEmits<RulerEmits>()

    const rulerRef      = useTemplateRef('rulerRef')
    const index         = ref(0)
    const isDragging    = ref(false)
    const count         = computed(() => props.values.length - 1);

    watch(() => model.value, (val) => {
        const idx = props.values.indexOf(val!)
        index.value = idx === -1 ? 0 : idx
    }, { immediate: true })

    const throttledEmit = useThrottleFn((index: number) => {
        const value = props.values[index]
        if (model.value != value) {
            model.value = value;
            emits('change', value)
        }
    }, 80);

    const updateIndex = (e: PointerEvent) => {
        if (!rulerRef.value) return;
        const rect = rulerRef.value.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percent = x / rect.width;
        const idx = Math.round(percent * count.value);
        index.value = idx;
        throttledEmit(idx);
    };

    const startDrag = (e: PointerEvent) => {
        isDragging.value = true;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        updateIndex(e);
    };

    const onDragging = (e: PointerEvent) => {
        if (!isDragging.value) return;
        updateIndex(e);
    };

    const stopDrag = (e: PointerEvent) => {
        if (!isDragging.value) return;
        isDragging.value = false;
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    };
</script>

<template>
    <div class="ui-ruler" 
        ref="rulerRef"
        @pointerdown="startDrag"
        @pointermove="onDragging"
        @pointerup="stopDrag"
        @pointerleave="stopDrag"
        @pointercancel="stopDrag"
    >
        <span class="ui-ruler_tick" v-for="(_, i) in values" :key="i" :style="{ left: `${(i / count ) * 100}%` }" />
        <span class="ui-ruler_indicator" :style="{ left: `${( index / count ) * 100}%` }" />
    </div>
</template>

<style lang="less">
    .ui-ruler {
        cursor: pointer;
        position: relative;

        &_tick {
            position: absolute;
            top: 30%;
            bottom: 30%;
            width: 1px;
            border-left: 1px solid var(--color-fill-8);
        }

        &_indicator {
            position: absolute;
            transform: translateX(-50%);
            width: 2px;
            height: 100%;
            background-color: var(--color-danger-9);
            will-change: transform;
        }
    }
</style>