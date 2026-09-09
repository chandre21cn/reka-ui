export interface AlertProps {
    type?: 'info' | 'success' | 'warn' | 'error';
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => boolean | undefined | Promise<boolean | undefined>;
}
type AlertOptions = Pick<AlertProps, 'confirmText' | 'cancelText' | 'onConfirm'>;
export declare const Alert: {
    info(title: string, message: string, options?: AlertOptions): void;
    success(title: string, message: string, options?: AlertOptions): void;
    warn(title: string, message: string, options?: AlertOptions): void;
    error(title: string, message: string, options?: AlertOptions): void;
};
declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import('vue').DefineComponent<AlertProps, {
    open: () => void | undefined;
    close: () => void | undefined;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<AlertProps> & Readonly<{}>, {
    type: "info" | "success" | "warn" | "error";
    confirmText: string;
    cancelText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
