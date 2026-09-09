<script setup lang="ts">
import { Fragment, h, useSlots, type VNode } from 'vue';
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

const SlotItem = () => {
    const children = slots.default ? slots.default() : [];
    const flattendChildren: VNode[] = [];
    const flatten = (vnodes: VNode[]) => {
        vnodes.forEach(vnode => {
            if (vnode.type === Fragment && Array.isArray(vnode.children)) {
                flatten(vnode.children as VNode[])
            } else {
                flattendChildren.push(vnode);
            }
        })
    }

    flatten(children)

    return flattendChildren.map((child, index) => {
        return h('div', {
            class: 'ui-space-item',
            key: child.key ?? index
        }, [ child ])
    })
}

</script>

<template>
    <div 
        :class="[ spaceVariants(props), $attrs.class ]" 
        :style="{ gap: `${ size }px` }"
    >
        <SlotItem />
    </div>
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