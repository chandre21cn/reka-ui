import { DropdownMenuContentProps } from 'reka-ui';
declare var __VLS_14: {
    open: boolean;
}, __VLS_28: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_14) => any;
} & {
    content?: (props: typeof __VLS_28) => any;
};
declare const __VLS_base: import('vue').DefineComponent<DropdownMenuContentProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: import('reka-ui').PointerDownOutsideEvent) => any;
    focusOutside: (event: import('reka-ui').FocusOutsideEvent) => any;
    interactOutside: (event: import('reka-ui').PointerDownOutsideEvent | import('reka-ui').FocusOutsideEvent) => any;
    closeAutoFocus: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<DropdownMenuContentProps> & Readonly<{
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: import('reka-ui').PointerDownOutsideEvent) => any) | undefined;
    onFocusOutside?: ((event: import('reka-ui').FocusOutsideEvent) => any) | undefined;
    onInteractOutside?: ((event: import('reka-ui').PointerDownOutsideEvent | import('reka-ui').FocusOutsideEvent) => any) | undefined;
    onCloseAutoFocus?: ((event: Event) => any) | undefined;
}>, {
    side: "top" | "right" | "bottom" | "left";
    sideOffset: number;
    align: "end" | "start" | "center";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
