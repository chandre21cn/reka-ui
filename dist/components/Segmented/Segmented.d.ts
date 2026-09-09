import { TabsRootProps } from 'reka-ui';
interface SegmentedProps extends TabsRootProps {
    modelValue?: string | number;
    size?: 'base' | 'small' | 'medium' | 'large';
}
declare var __VLS_19: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_19) => any;
};
declare const __VLS_base: import('vue').DefineComponent<SegmentedProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (payload: import('reka-ui').StringOrNumber) => any;
}, string, import('vue').PublicProps, Readonly<SegmentedProps> & Readonly<{
    "onUpdate:modelValue"?: ((payload: import('reka-ui').StringOrNumber) => any) | undefined;
}>, {
    size: "base" | "small" | "medium" | "large";
    asChild: boolean;
    activationMode: "automatic" | "manual";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
