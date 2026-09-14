<script setup lang="ts">
    import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'reka-ui';
    import { computed } from 'vue';

    interface SliderProps {
        min?: number;
        max?: number;
        step?: number;
        disabled?: boolean;
        values?: number[]
    }

    interface SliderEmits {
        (e: 'change', value: number): void;
    }

    const props = withDefaults(defineProps<SliderProps>(), {
        min: 0,
        max: 100,
        step: 1,
        disabled: false,
    })

    const model = defineModel<number>()

    const emits = defineEmits<SliderEmits>()

    const hasValues = computed(() => Array.isArray(props.values) && props.values.length > 0)

    // 当存在 values 时，强制 min=0，max=length-1，step=1
    const realMin = computed(() => (hasValues.value ? 0 : props.min))
    const realMax = computed(() => (hasValues.value ? props.values!.length - 1 : props.max))
    const realStep = computed(() => (hasValues.value ? 1 : props.step))

    const sliderValues = computed({
        get() {
            if (hasValues.value) {
                const index = props.values!.findIndex(item => item === model.value)
                return [index !== -1 ? index : 0]
            }
            return typeof model.value === 'number' ? [model.value] : [props.min]
        },
        set(val: number[]) {
            const rawIndexOrVal = val[0] ?? 0
            let newValue: number
            if (hasValues.value) {
                newValue = props.values![rawIndexOrVal] ?? props.values![0]
            } else {
                newValue = rawIndexOrVal
            }
            model.value = newValue
            emits('change', newValue)
        }
    })
</script>

<template>
    <SliderRoot class="ui-slider"
        v-model="sliderValues"
        :min="realMin"
        :max="realMax"
        :step="realStep"
        :disabled="props.disabled"
    >
        <SliderTrack class="ui-slider_track">
            <SliderRange class="ui-slider_range" />
        </SliderTrack>
        <SliderThumb v-for="(_, key) in sliderValues" :key="key" class="ui-slider_thumb" />
    </SliderRoot>
</template>

<style lang="less">
.ui-slider {
    position: relative;
    display: flex;
    width: 100%;
    min-width: 50px;
    height: var(--size-6);
    align-items: center;
    touch-action: none;
    user-select: none;

    &_track {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: var(--size-2);
        flex-grow: 1;
        border-radius: var(--border-radius-small);
        background-color: var(--color-fill-4);
    }

    &_range {
        position: absolute;
        height: 100%;
        background-color: var(--color-primary-9);
        box-shadow: var(--shadow-outline);
        &[data-disabled] {
            opacity: 0.5;
        }
    }

    &_thumb {
        display: block;
        width: var(--size-6);
        height: var(--size-6);
        border-radius: var(--border-radius-small);
        background-color: white;
        transition-duration: 150ms;
        transition-property: color, background-color, border-color;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: var(--shadow-line);
        cursor: pointer;

        &:focus-visible {
            outline: 0px solid rgba(0,0,0,0.1);
        }

        &[data-disabled] {
            display: none;
            pointer-events: none;
        }
    }

    

}

</style>
