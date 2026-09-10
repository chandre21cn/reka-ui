<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'reka-ui';
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'reka-ui';
const props = defineProps<SliderRootProps>();
const emits = defineEmits<SliderRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <SliderRoot class="ui-slider" v-bind="forwarded">
        <SliderTrack class="ui-slider_track">
            <SliderRange class="ui-slider_range" />
        </SliderTrack>
        <SliderThumb v-for="(_, key) in modelValue" :key="key" class="ui-slider_thumb" />
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

        &:disabled {
            opacity: 0.5;
            pointer-events: none;
        }
    }
}

</style>
