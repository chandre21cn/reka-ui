import { VariantProps } from 'class-variance-authority';
export { default as Input } from './Input';
export { default as Autocomplete } from './Autocomplete';
export { default as Select } from './Select';
export declare const inputVariants: (props?: ({
    size?: "base" | "small" | "medium" | "large" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type InputVariants = VariantProps<typeof inputVariants>;
