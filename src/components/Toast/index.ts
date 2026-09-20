import { render, ref, reactive, h, defineComponent } from 'vue';
import { ToastProvider, ToastViewport } from 'reka-ui';
import ToastComponent, { type ToastProps } from './Toast.vue';

export interface ToastItem extends ToastProps {
    id: string;
}

export interface ToastHandle {
    id: string;
    update: (options: Partial<ToastProps>) => void;
    hide: () => void;
}

const toasts = ref<ToastItem[]>([]);
let isContainerMounted = false;

const GlobalToastContainer = defineComponent({
    name: 'GlobalToastContainer',
    setup() {
        return () =>
            h(ToastProvider, { swipeDirection: 'up' }, () => [
                // 遍历响应式列表渲染 ToastItem
                toasts.value.map((item) =>
                    h(ToastComponent, {
                        key: item.id,
                        ...item,
                        onDestroy: () => {
                            // 消息倒计时结束或关闭动画完成后，从列表中安全移除
                            toasts.value = toasts.value.filter((t) => t.id !== item.id);
                        }
                    })
                ),
                // 整个应用唯一真正的 Viewport
                h(ToastViewport, { class: 'ui-toast-viewport' })
            ]);
    }
});

const ensureGlobalContainer = () => {
    if (!isContainerMounted) {
        const container = document.createElement('div');
        container.id = 'ui-toast-global-container';
        document.body.appendChild(container);
        render(h(GlobalToastContainer), container);
        isContainerMounted = true;
    }
};

let seed = 0;
const showToast = (options: ToastProps) => {
    ensureGlobalContainer();

    const id = `ui-toast-${Date.now()}_${seed++}`;
    toasts.value.push({
        ...options,
        id
    });
};

export const Toast = {
    info(message: string, duration?: number) {
        showToast({ type: 'info', message, duration });
    },
    success(message: string, duration?: number) {
        showToast({ type: 'success', message, duration });
    },
    error(message: string, duration?: number) {
        showToast({ type: 'error', message, duration });
    },
    warning(message: string, duration?: number) {
        showToast({ type: 'warning', message, duration });
    },
    loading(message: string): ToastHandle {
        ensureGlobalContainer();
        const id = `ui-toast-${Date.now()}_${seed++}`;
        const toastItem = reactive<ToastItem>({
            id,
            type: 'loading',
            message,
            persistent: true
        });

        toasts.value.push(toastItem);

        const handle: ToastHandle = {
            id,
            update(newOptions: Partial<ToastProps>) {
                Object.assign(toastItem, newOptions);
            },
            hide() {
                toasts.value = toasts.value.filter((t) => t.id !== id);
            }
        };

        return handle;
    }
};

export default Toast;