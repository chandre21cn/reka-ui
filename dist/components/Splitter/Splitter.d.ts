import { SplitterPanelProps } from 'reka-ui';
interface SplitterProps {
    main?: Partial<SplitterPanelProps>;
    aside?: Partial<SplitterPanelProps>;
    asideTop?: Partial<SplitterPanelProps>;
    asideBottom?: Partial<SplitterPanelProps>;
}
declare var __VLS_14: {}, __VLS_43: {}, __VLS_56: {}, __VLS_58: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_14) => any;
} & {
    top?: (props: typeof __VLS_43) => any;
} & {
    bottom?: (props: typeof __VLS_56) => any;
} & {
    extra?: (props: typeof __VLS_58) => any;
};
declare const __VLS_base: import('vue').DefineComponent<SplitterProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    resize: (size: number, prevSize: number | undefined) => any;
    collapse: () => any;
    expand: () => any;
}, string, import('vue').PublicProps, Readonly<SplitterProps> & Readonly<{
    onResize?: ((size: number, prevSize: number | undefined) => any) | undefined;
    onCollapse?: (() => any) | undefined;
    onExpand?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
