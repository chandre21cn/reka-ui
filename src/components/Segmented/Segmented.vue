
<script setup lang="ts">
import { TabsList, TabsRoot, TabsIndicator, type TabsRootProps, useForwardPropsEmits, type TabsRootEmits } from 'reka-ui';
import { segmentedVariants } from '.';
interface SegmentedProps extends TabsRootProps {
    modelValue?: string | number;
    size?: 'base' | 'small' | 'medium' | 'large';
}
const props = withDefaults(defineProps<SegmentedProps>(), {
    asChild: true,
    size: 'base',
    activationMode: 'automatic',
});

const emits = defineEmits<TabsRootEmits>();
const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <TabsRoot :class="[ segmentedVariants(props), $attrs.class ]" v-bind="forwarded">
        <TabsList>
            <TabsIndicator class="ui-segmented-indicator" />
            <slot />
        </TabsList>
    </TabsRoot>
</template>

<style lang="less">
.ui-segmented {
    position: relative;
    display: inline-grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    min-width: max-content;
    align-items: stretch;
    height: var(--control-height-base);
    vertical-align: middle;
    font-size: var(--font-size-base);
    background-color: var(--color-fill-3);
    border-radius: var(--border-radius-base);

    &-indicator {
        position: absolute;
        width: var(--reka-tabs-indicator-size);
        height: var(--reka-tabs-indicator-thickness);
        left: var(--reka-tabs-indicator-position);
        z-index: 0;
        transition: left .1s;
        border-radius: inherit;
        background-color: var(--color-fill-1);
        border: 1px solid var(--color-border-secondary);
        [data-theme="dark"] & {
            border-color: var(--color-border);
            background-color: var(--color-fill-5);
        }
    }

    &-item {
        cursor: pointer;
        position: relative;
        display: flex;
        padding: 0 var(--size-3);
        justify-content: center;
        align-items: center;
        color: var(--color-text-2);
        transition: color .2s;
        &:disabled {
            pointer-events: none;
            cursor: default;
            color: var(--color-text-4);
        }
        &[data-active] {
            color: var(--color-text-1);
        }
    }

    &_small {
        font-size: var(--font-size-small);
        height: var(--control-height-small);
        border-radius: var(--border-radius-small);
    }
    &_medium {
        font-size: var(--font-size-medium);
        height: var(--control-height-medium);
        border-radius: var(--border-radius-medium);
    }
    &_large {
        font-size: var(--font-size-medium);
        height: var(--control-height-large);
        border-radius: var(--border-radius-large);
    }

    &_small &-item {
        padding: 0 var(--size-2);
    }
    &_medium &-item {
        padding: 0 var(--size-4);
    }
    &_large &-item {
        padding: 0 var(--size-5);
    }
}
</style>