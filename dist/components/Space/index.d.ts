import { VariantProps } from 'class-variance-authority';
export { default as Space } from './Space';
export declare const spaceVariants: (props?: ({
    direction?: "vertical" | "horizontal" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type SpaceVariants = VariantProps<typeof spaceVariants>;
