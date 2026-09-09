<script setup lang="ts">
import { ToastDescription, ToastRoot } from 'reka-ui'
import { ref, watch, onMounted } from 'vue';
import { InfoIcon, XCircleIcon, CheckCircle2, AlertCircleIcon } from 'lucide-vue-next';

export type ToastType = 'info' | 'success' | 'error' | 'warning';

export interface ToastProps {
    message?: string;
    type?: ToastType;
    duration?: number;
    onDestroy?: () => void;
}

const props = withDefaults(defineProps<ToastProps>(), {
    message: '',
    type: 'info',
    duration: 3000
});

const open = ref(false);

onMounted(() => {
    open.value = true;
});

watch(open, (newVal) => {
    if (!newVal && props.onDestroy) {
        setTimeout(() => {
            props.onDestroy?.();
        }, 200); 
    }
});
</script>

<template>
    <ToastRoot v-model:open="open" :duration="props.duration" class="ui-toast-root">
        <CheckCircle2 v-if="type === 'success'" :class="['ui-toast-icon', type]" />
        <XCircleIcon v-else-if="type === 'error'" :class="['ui-toast-icon', type]" />
        <AlertCircleIcon v-else-if="type === 'warning'" :class="['ui-toast-icon', type]" />
        <InfoIcon v-else :class="['ui-toast-icon', type]" />
        <ToastDescription v-if="props.message" class="ui-toast-message">
            {{ props.message }}
        </ToastDescription>
    </ToastRoot>
</template>

<style lang="less">
    .ui-toast {
        &-viewport {
            position: fixed;
            top: var(--size-20);
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            width: max-content;
            max-width: 100vw;
            margin: 0;
            list-style: none;
            z-index: 9999;
            outline: none;
            gap: var(--size-2);
        }

        &-root {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: var(--size-3) var(--size-4);
            gap: var(--size-2);
            font-size: var(--font-size-base);
            color: var(--color-text-2);
            background-color: var(--color-fill-1);
            border-radius: var(--border-radius-medium);
            box-shadow: var(--shadow-5);
            &[data-state='open'] {
                animation: toastIn .2s cubic-bezier(0.16, 1, 0.3, 1);
            }
            &[data-state='closed'] {
                animation: toastOut .2s ease-in forwards;
            }
        }

        &-icon {
            width: 1.5em;
            height: 1.5em;
            &.info {
                color: var(--color-primary-9);
            }
            &.error {
                color: var(--color-danger-9);
            }
            &.success {
                color: var(--color-success-9);
            }
            /* 修改段 2：将 &.warn 修正为 &.warning 与 type 匹配 */
            &.warning {
                color: var(--color-warning-9);
            }
        }
    }

    @keyframes toastIn {
        from {
            opacity: 0;
            transform: translateY(-100%) scale(0.96);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    @keyframes toastOut {
        from {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        to {
            opacity: 0;
            transform: translateY(-20px) scale(0.96);
        }
    }
</style>