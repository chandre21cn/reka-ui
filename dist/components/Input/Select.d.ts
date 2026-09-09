import { SelectRootProps } from 'reka-ui';
import { InputVariants } from '.';
interface SelectOptionData {
    value: string | number;
    label?: string;
    [key: string]: any;
}
interface SelectProps extends SelectRootProps {
    placeholder?: string;
    size?: InputVariants['size'];
    data: string[] | number[] | SelectOptionData[];
}
declare var __VLS_14: {}, __VLS_21: {};
type __VLS_Slots = {} & {
    prefix?: (props: typeof __VLS_14) => any;
} & {
    suffix?: (props: typeof __VLS_21) => any;
};
declare const __VLS_base: import('vue').DefineComponent<SelectProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: import('reka-ui').AcceptableValue) => any;
    "update:open": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<SelectProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: import('reka-ui').AcceptableValue) => any) | undefined;
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
}>, {
    size: "base" | "small" | "medium" | "large" | null;
    placeholder: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
