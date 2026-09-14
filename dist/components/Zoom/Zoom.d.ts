import { ZoomData, ZoomExpose, ZoomProps } from '.';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: import('vue').DefineComponent<ZoomProps, ZoomExpose, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    right: (event: KeyboardEvent | MouseEvent) => any;
    left: (event: KeyboardEvent | MouseEvent) => any;
    change: (data: ZoomData) => any;
    wheel: (event: WheelEvent) => any;
}, string, import('vue').PublicProps, Readonly<ZoomProps> & Readonly<{
    onRight?: ((event: KeyboardEvent | MouseEvent) => any) | undefined;
    onLeft?: ((event: KeyboardEvent | MouseEvent) => any) | undefined;
    onChange?: ((data: ZoomData) => any) | undefined;
    onWheel?: ((event: WheelEvent) => any) | undefined;
}>, {
    enable: boolean;
    maxScale: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
