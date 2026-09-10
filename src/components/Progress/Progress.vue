<script setup lang="ts">
import { computed, useTemplateRef } from 'vue';
import { ProgressRoot, ProgressIndicator, useForwardPropsEmits, type ProgressRootProps, type ProgressRootEmits } from 'reka-ui';

const props = withDefaults(defineProps<ProgressRootProps>(), {
})
const emits = defineEmits<ProgressRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
const progressRef = useTemplateRef('progressRef')

const progressLabel = computed(() => {
    if (!progressRef.value?.getValueLabel) return 0;
    return progressRef.value.getValueLabel(props.modelValue, props.max ?? 100)
})
</script>

<template>
    <ProgressRoot class="ui-progress" ref="progressRef" v-bind="forwarded">
        <ProgressIndicator class="ui-progress-indicator" :style="{ width: progressLabel }" />
    </ProgressRoot>
</template>

<style lang="less">
.ui-progress {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: var(--size-2);
    flex-grow: 1;
    border-radius: var(--border-radius-small);
    background-color: var(--color-fill-4);

    &-indicator {
        position: absolute;
        height: 100%;
        border-radius: inherit;
        background-color: var(--color-primary-9);
        box-shadow: var(--shadow-outline);
        transition-duration: .15s;
        transition-property: all;
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    }
}
</style>