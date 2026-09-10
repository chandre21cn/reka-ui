<script setup lang="ts">
import { Fragment, Comment, useSlots, type VNode, computed } from 'vue';
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

const flattenedChildren = computed(() => {
    const children = slots.default ? slots.default() : [];
    const result: VNode[] = [];

    const flatten = (vnodes: VNode[]) => {
        vnodes.forEach(vnode => {
            if (vnode.type === Comment) {
                return;
            }
            if (vnode.type === Fragment && Array.isArray(vnode.children)) {
                flatten(vnode.children as VNode[])
            } else {
                result.push(vnode);
            }
        })
    }
    flatten(children)
    return result;
})

</script>

<template>
    <div 
        :class="[ spaceVariants(props), $attrs.class ]" 
        :style="{ gap: `${ size }px` }"
    >
        <div 
            v-for="(child, index) in flattenedChildren" 
            :key="child.key ?? index"
            class="ui-space-item"
        >
            <component :is="child" />
        </div>
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