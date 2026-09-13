<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle, type SplitterPanelProps, type SplitterPanelEmits } from 'reka-ui'

interface SplitterProps {
    main?: Partial<SplitterPanelProps>;
    aside?: Partial<SplitterPanelProps>;
    asideTop?: Partial<SplitterPanelProps>;
    asideBottom?: Partial<SplitterPanelProps>;
}

const props = withDefaults(defineProps<SplitterProps>(), {})
const emits = defineEmits<SplitterPanelEmits>()
function onResize(size: number, prevSize?: number) {
    emits('resize', size, prevSize)
}

</script>

<template>
    <SplitterGroup direction="horizontal">

        <SplitterPanel class="ui-splitter-panel" v-bind="main">
            <slot />
        </SplitterPanel>

        <SplitterResizeHandle class="ui-splitter-handle"/>

        <SplitterPanel v-bind="aside" @collapse="emits('collapse')" @expand="emits('expand')" @resize="onResize">
            <SplitterGroup direction="vertical">

                <SplitterPanel class="ui-splitter-panel" v-bind="asideTop">
                    <slot name="top" />
                </SplitterPanel>

                <SplitterResizeHandle class="ui-splitter-handle" />

                <SplitterPanel class="ui-splitter-panel"  v-bind="asideBottom">
                    <slot name="bottom" />
                </SplitterPanel>

            </SplitterGroup>
        </SplitterPanel>
    </SplitterGroup>
</template>

<style lang="less">
.ui-splitter {
    &-panel {
        display: flex;
    }

    &-handle {
        display: flex;
        align-items: center;
        justify-content: center;
        &:after {
            content: '';
            border-radius: var(--border-radius-full);
            background-color: var(--color-fill-a7);
        }
        &[data-orientation="horizontal"] {
            width: var(--size-2);
            &:after {
                width: var(--size-1);
                height: 3rem;
            }
        }
        &[data-orientation="vertical"] {
            height: var(--size-2);
            &:after {
                width: 3rem;
                height: var(--size-1);
            }
        }
        &[data-state='hover'], &[data-state='drag'] {
            &:after {
                background-color: var(--color-fill-a8);
            }
        }
    }
}
</style>