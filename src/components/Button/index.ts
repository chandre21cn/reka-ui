import { type VariantProps, cva } from 'class-variance-authority';
export { default as Button } from './Button.vue';

export const buttonVariants = cva('ui-button', {
    variants: {
        variant: {
            'primary': 'ui-button-primary',
            'secondary': 'ui-button-secondary',
            'text': 'ui-button-text',
        },
        status: {
            'normal': 'ui-button-status_normal',
            'primary': 'ui-button-status_primary',
            'success': 'ui-button-status_success',
            'danger': 'ui-button-status_danger',
            'warning': 'ui-button-status_warning',
        },
        size: {
            'base': 'ui-button-size_base',
            'small': 'ui-button-size_small',
            'medium': 'ui-button-size_medium',
            'large': 'ui-button-size_large',
        },
        long: {
            true: 'ui-button-long'
        }
    },

    defaultVariants: {
        variant: 'secondary',
        status: 'normal',
        size: 'base',
        long: false,
    },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
