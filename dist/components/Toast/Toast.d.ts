export type ToastType = 'info' | 'success' | 'error' | 'warning' | 'loading';
export interface ToastProps {
    message?: string;
    type?: ToastType;
    duration?: number;
    persistent?: boolean;
}
declare const __VLS_export: import('vue').DefineComponent<ToastProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    destroy: () => any;
}, string, import('vue').PublicProps, Readonly<ToastProps> & Readonly<{
    onDestroy?: (() => any) | undefined;
}>, {
    type: ToastType;
    message: string;
    duration: number;
    persistent: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
