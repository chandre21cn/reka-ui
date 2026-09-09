export type ToastType = 'info' | 'success' | 'error' | 'warning';
export interface ToastProps {
    message?: string;
    type?: ToastType;
    duration?: number;
    onDestroy?: () => void;
}
declare const __VLS_export: import('vue').DefineComponent<ToastProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ToastProps> & Readonly<{}>, {
    type: ToastType;
    message: string;
    duration: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
