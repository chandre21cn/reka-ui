import { PrimitiveProps } from 'reka-ui';
import { ButtonVariants } from '.';
interface Props extends PrimitiveProps {
    variant?: ButtonVariants['variant'];
    status?: ButtonVariants['status'];
    size?: ButtonVariants['size'];
    isLoading?: boolean;
    loadingText?: string;
    long?: boolean;
}
declare var __VLS_13: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_13) => any;
};
declare const __VLS_base: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    variant: "primary" | "secondary" | "text" | null;
    status: "primary" | "normal" | "success" | "danger" | "warning" | null;
    size: "base" | "small" | "medium" | "large" | null;
    isLoading: boolean;
    loadingText: string;
    as: import('reka-ui').AsTag | import('vue').Component;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
