<script setup lang="ts">
import { ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from 'reka-ui'
</script>

<template>
    <ScrollAreaRoot class="ui-scrollArea">
        <ScrollAreaViewport class="ui-scrollArea-viewport">
            <slot />
        </ScrollAreaViewport>
        <ScrollAreaScrollbar class="ui-scrollArea-bar" orientation="vertical">
            <ScrollAreaThumb class="ui-scrollArea-thumb" />
        </ScrollAreaScrollbar>
        <ScrollAreaScrollbar class="ui-scrollArea-bar" orientation="horizontal">
            <ScrollAreaThumb class="ui-scrollArea-thumb" />
        </ScrollAreaScrollbar>
    </ScrollAreaRoot>
</template>

<style lang="less">
    .ui-scrollArea {
        overflow: hidden;
        --scrollbar-size: var(--size-2);
        &-viewport {
            width: 100%;
            height: 100%;
            border-radius: inherit;
        }

        &-bar {
            display: flex;
            user-select: none;
            touch-action: none;
            padding: 2px;
            &[data-orientation='vertical'] {
                width: var(--scrollbar-size);
            }
            &[data-orientation='horizontal'] {
                flex-direction: column;
                height: var(--scrollbar-size);
            }
        }

        &-thumb {
            flex: 1;
            background: var(--color-fill-a7);
            border-radius: var(--scrollbar-size);
            position: relative;

            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
                height: 100%;
                min-width: 44px;
                min-height: 44px;
            }
        }
    }
</style>