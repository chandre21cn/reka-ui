import { type VariantProps, cva } from 'class-variance-authority';
export { default as Space } from './Space.vue'

export const spaceVariants = cva('ui-space', {
    variants: {
        direction: {
            'horizontal': 'ui-space-horizontal',
            'vertical': 'ui-space-vertical',
        },
    },
    defaultVariants: {
        direction: 'horizontal',
    },
});

export type SpaceVariants = VariantProps<typeof spaceVariants>;
