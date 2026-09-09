<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui'

</script>

<template>
    <SplitterGroup direction="horizontal">
        <SplitterPanel class="ui-splitter-panel">
            <slot />
        </SplitterPanel>

        <SplitterResizeHandle class="ui-splitter-handle" />

        <SplitterPanel>
            <SplitterGroup direction="vertical">
                <SplitterPanel class="ui-splitter-panel">
                    <slot name="top" />
                </SplitterPanel>
                
                <SplitterResizeHandle class="ui-splitter-handle" />

                <SplitterPanel class="ui-splitter-panel">
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
        align-items: center;
        justify-content: center;
        background-color: var(--color-fill-a3);
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