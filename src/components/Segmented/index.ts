export { default as Segmented } from './Segmented.vue'
export { default as SegmentedItem } from './SegmentedItem.vue'
import { type VariantProps, cva } from 'class-variance-authority';

export const segmentedVariants = cva('ui-segmented', {
    variants: {
        size: {
            'base': '',
            'small': 'ui-segmented_small',
            'medium': 'ui-segmented_medium',
            'large': 'ui-segmented_large',
        },
    },

    defaultVariants: {
        size: 'base',
    },
});

export type SegmentedVariants = VariantProps<typeof segmentedVariants>;
