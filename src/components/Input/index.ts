import { type VariantProps, cva } from 'class-variance-authority';
export { default as Input } from './Input.vue';
export { default as Autocomplete } from './Autocomplete.vue'
export { default as Select } from './Select.vue'

export const inputVariants = cva('ui-input', {
    variants: {
        size: {
            'base': 'ui-input-base',
            'small': 'ui-input-small',
            'medium': 'ui-input-medium',
            'large': 'ui-input-large',
        },
    },
    defaultVariants: {
        size: 'base',
    },
});

export type InputVariants = VariantProps<typeof inputVariants>;
