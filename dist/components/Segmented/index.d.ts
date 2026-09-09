import { VariantProps } from 'class-variance-authority';
export { default as Segmented } from './Segmented';
export { default as SegmentedItem } from './SegmentedItem';
export declare const segmentedVariants: (props?: ({
    size?: "base" | "small" | "medium" | "large" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type SegmentedVariants = VariantProps<typeof segmentedVariants>;
