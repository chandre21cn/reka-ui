<script lang="ts">
import { defineComponent, Fragment, Comment, h, type VNode } from 'vue';
import { type SpaceVariants, spaceVariants } from '.';

export interface SpaceProps {
    size?: number;
    direction?: SpaceVariants['direction'];
}

export default defineComponent({
    name: 'Space',
    props: {
        size: {
            type: Number,
            default: 8
        },
        direction: {
            type: String as () => SpaceVariants['direction'],
            default: 'horizontal'
        }
    },
    setup(props, { slots, attrs }) {
        const flatten = (vnodes: VNode[]): VNode[] => {
            const result: VNode[] = [];
            vnodes.forEach((vnode) => {
                if (vnode.type === Comment) {
                    return;
                }
                if (vnode.type === Fragment && Array.isArray(vnode.children)) {
                    result.push(...flatten(vnode.children as VNode[]));
                } else {
                    result.push(vnode);
                }
            });
            return result;
        };

        return () => {
            const children = slots.default ? slots.default() : [];
            const flattenedChildren = flatten(children);

            return h(
                'div',
                {
                    ...attrs,
                    class: [spaceVariants(props), attrs.class],
                    style: [
                        { gap: `${props.size}px` },
                        (attrs.style as Record<string, any>) || {}
                    ]
                },
                flattenedChildren.map((child, index) => {
                    const childKey = child.key !== null && child.key !== undefined 
                        ? child.key 
                        : (typeof child.type === 'object' ? (child.type as any).__name || index : index);

                    return h(
                        'div',
                        {
                            class: 'ui-space-item',
                            key: `space-item-${childKey}-${index}`
                        },
                        [child]
                    );
                })
            );
        };
    }
});
</script>

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