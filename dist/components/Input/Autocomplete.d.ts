import { AutocompleteRootProps } from 'reka-ui';
import { InputVariants } from '.';
interface AutocompleteData {
    value: string | number;
    label: string;
    [key: string]: any;
}
interface AutocompleteProps extends AutocompleteRootProps {
    size?: InputVariants['size'];
    name?: string;
    placeholder?: string;
    options: string[] | number[] | AutocompleteData[];
}
declare var __VLS_16: {}, __VLS_18: {};
type __VLS_Slots = {} & {
    icon?: (props: typeof __VLS_16) => any;
} & {
    prefix?: (props: typeof __VLS_18) => any;
};
declare const __VLS_base: import('vue').DefineComponent<AutocompleteProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    remove: (value: AutocompleteData) => any;
    highlight: (payload: {
        ref: HTMLElement;
        value: string;
    } | undefined) => any;
    "update:open": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<AutocompleteProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onRemove?: ((value: AutocompleteData) => any) | undefined;
    onHighlight?: ((payload: {
        ref: HTMLElement;
        value: string;
    } | undefined) => any) | undefined;
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
}>, {
    asChild: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
