import { VariantProps } from 'class-variance-authority';
export { default as Button } from './Button';
export declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "text" | null | undefined;
    status?: "primary" | "normal" | "success" | "danger" | "warning" | null | undefined;
    size?: "base" | "small" | "medium" | "large" | null | undefined;
    long?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
