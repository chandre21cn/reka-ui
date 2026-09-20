<script setup lang="ts">
import { ToastDescription, ToastRoot } from 'reka-ui'
import { ref, onMounted, computed } from 'vue';
import { InfoIcon, XCircleIcon, CheckCircle2, AlertCircleIcon, Loader2Icon } from 'lucide-vue-next';

export type ToastType = 'info' | 'success' | 'error' | 'warning' | 'loading';

export interface ToastProps {
    message?: string;
    type?: ToastType;
    duration?: number;
    persistent?: boolean;
}

const props = withDefaults(defineProps<ToastProps>(), {
    message: '',
    type: 'info',
    duration: 3000,
    persistent: false
});

const emit = defineEmits<{
    (e: 'destroy'): void;
}>();

const open = ref(false);

const computedDuration = computed(() => props.persistent ? Infinity : props.duration);

onMounted(() => {
    open.value = true;
});

const handleOpenChange = (val: boolean) => {
    open.value = val;
    if (!val) {
        setTimeout(() => {
            emit('destroy');
        }, 200);
    }
};

</script>

<template>
    <ToastRoot 
        :open="open" 
        @update:open="handleOpenChange" 
        type="background" 
        :duration="computedDuration" 
        class="ui-toast-root"
    >
        <CheckCircle2 v-if="type === 'success'" :class="['ui-toast-icon', type]" />
        <XCircleIcon v-else-if="type === 'error'" :class="['ui-toast-icon', type]" />
        <AlertCircleIcon v-else-if="type === 'warning'" :class="['ui-toast-icon', type]" />
        <Loader2Icon v-else-if="type === 'loading'" :class="['ui-toast-icon', type]" />
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
            &.warning {
                color: var(--color-warning-9);
            }
            &.loading {
                animation: ui-spin 1s linear infinite;
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