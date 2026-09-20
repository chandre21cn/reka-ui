import { ToastProps } from './Toast';
export interface ToastItem extends ToastProps {
    id: string;
}
export interface ToastHandle {
    id: string;
    update: (options: Partial<ToastProps>) => void;
    hide: () => void;
}
export declare const Toast: {
    info(message: string, duration?: number): void;
    success(message: string, duration?: number): void;
    error(message: string, duration?: number): void;
    warning(message: string, duration?: number): void;
    loading(message: string): ToastHandle;
};
export default Toast;
