import { PointerDownOutsideEvent } from 'reka-ui';
interface DialogProps {
    title?: string;
    width?: string | number;
    description?: string;
    closable?: boolean;
    hideTitle?: boolean;
    hideFooter?: boolean;
    hideOverlay?: boolean;
    hideCancel?: boolean;
    confirmText?: string;
    cancelText?: string;
    escToClose?: boolean;
    overlayToClose?: boolean;
    onCancel?: () => boolean | Promise<boolean>;
    onConfirm?: () => boolean | Promise<boolean>;
}
declare var __VLS_14: {}, __VLS_42: {}, __VLS_50: {}, __VLS_52: {}, __VLS_54: {};
type __VLS_Slots = {} & {
    trigger?: (props: typeof __VLS_14) => any;
} & {
    title?: (props: typeof __VLS_42) => any;
} & {
    description?: (props: typeof __VLS_50) => any;
} & {
    default?: (props: typeof __VLS_52) => any;
} & {
    footer?: (props: typeof __VLS_54) => any;
};
declare const __VLS_base: import('vue').DefineComponent<DialogProps, {
    show(): void;
    hide(): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: PointerDownOutsideEvent) => any;
    focusOutside: (event: import('reka-ui').FocusOutsideEvent) => any;
    interactOutside: (event: PointerDownOutsideEvent | import('reka-ui').FocusOutsideEvent) => any;
    openAutoFocus: (event: Event) => any;
    closeAutoFocus: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<DialogProps> & Readonly<{
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: PointerDownOutsideEvent) => any) | undefined;
    onFocusOutside?: ((event: import('reka-ui').FocusOutsideEvent) => any) | undefined;
    onInteractOutside?: ((event: PointerDownOutsideEvent | import('reka-ui').FocusOutsideEvent) => any) | undefined;
    onOpenAutoFocus?: ((event: Event) => any) | undefined;
    onCloseAutoFocus?: ((event: Event) => any) | undefined;
}>, {
    width: string | number;
    title: string;
    closable: boolean;
    confirmText: string;
    cancelText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
