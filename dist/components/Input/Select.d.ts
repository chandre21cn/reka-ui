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
    modelValue?: string | number;
}
declare var __VLS_16: {}, __VLS_29: {};
type __VLS_Slots = {} & {
    prefix?: (props: typeof __VLS_16) => any;
} & {
    suffix?: (props: typeof __VLS_29) => any;
};
declare const __VLS_base: import('vue').DefineComponent<SelectProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:open": (value: boolean) => any;
    "update:modelValue": (value: import('reka-ui').AcceptableValue) => any;
}, string, import('vue').PublicProps, Readonly<SelectProps> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import('reka-ui').AcceptableValue) => any) | undefined;
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
