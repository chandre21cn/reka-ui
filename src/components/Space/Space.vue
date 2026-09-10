<script setup lang="ts">
import { Fragment, Comment, h, useSlots, type VNode } from 'vue';
import { type SpaceVariants, spaceVariants } from '.'

interface SpaceProps {
    size?: number;
    direction?: SpaceVariants['direction']
}

const props = withDefaults(defineProps<SpaceProps>(), {
    size: 8,
    direction: 'horizontal'
});

const slots = useSlots()

const getFlattenedChildren = (vnodes: VNode[]): VNode[] => {
    const result: VNode[] = [];
    
    vnodes.forEach(vnode => {
        if (vnode.type === Comment) {
            return;
        }
        if (vnode.type === Fragment && Array.isArray(vnode.children)) {
            result.push(...getFlattenedChildren(vnode.children as VNode[]));
        } else {
            result.push(vnode);
        }
    });

    return result;
}

const RenderSpace = () => {
    const children = slots.default ? slots.default() : [];
    const flattened = getFlattenedChildren(children);

    const items = flattened.map((child, index) => {
        return h('div', {
            class: 'ui-space-item',
            key: child.key ?? index
        }, [ child ]);
    });

    return h('div', {
        class: [ spaceVariants(props) ],
        style: { gap: `${props.size}px` }
    }, items);
}

</script>

<template>
    <RenderSpace />
</template>

<style lang="less">
    .ui-space {
        display: flex;
        &-vertical {
            flex-direction: column;
        }
        &-horizontal {
            flex-direction: row;
        }
        &-item {
            display: inline-flex;
        }
    }
</style>