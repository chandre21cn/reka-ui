<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { Loader2Icon } from 'lucide-vue-next';
import { buttonVariants, type ButtonVariants } from '.'

interface Props extends PrimitiveProps {
    variant?: ButtonVariants['variant'];
    status?: ButtonVariants['status'];
    size?: ButtonVariants['size'];
    isLoading?: boolean;
    loadingText?: string;
    long?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    as: 'button',
    variant: 'secondary',
    status: 'normal',
    size: 'base',
    isLoading: false,
    loadingText: '',
});
</script>

<template>
    <Primitive :as="as" 
        :as-child="asChild" 
        :class="[ buttonVariants(props), $attrs.class ]" 
        :disabled="isLoading || $attrs.disabled"
    >
        <Loader2Icon v-if="isLoading" class="ui-button_loader" />
        <template v-if="!isLoading || (isLoading && !loadingText)">
            <slot />
        </template>
        <template v-else>
            {{ loadingText }}
        </template>
    </Primitive>
</template>

<style lang="less">
.ui-button {
    display: inline-flex;
    vertical-align: middle;
    width: fit-content;
    align-items: center;
    justify-content: center;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
    transition: background-color 0.1s ease, colors 0.2s;
    outline: 0;
    gap: var(--size-2);

    svg {
        width: 1em;
        height: 1em;
    }

    &:disabled {
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.5;
    }

    &:active {
        filter: var(--active-filter);
    }

    &_icon {
        width: 2.5rem;
        height: 2.5rem;
    }

    &_loader {
        animation: ui-spin 1s linear infinite;
    }

    // 尺寸
    &-size {
        &_small {
            padding: 0 var(--size-2);
            height: var(--control-height-small);
            font-size: var(--font-size-small);
            border-radius: var(--border-radius-small);
        }
        &_base {
            padding: 0 var(--size-2);
            height: var(--control-height-base);
            font-size: var(--font-size-base);
            border-radius: var(--border-radius-base);
        }
        &_medium {
            padding: 0 var(--size-3);
            height: var(--control-height-medium);
            font-size: var(--font-size-medium);
            border-radius: var(--border-radius-base);
            border-radius: var(--border-radius-medium);
        }
        &_large {
            padding: 0 var(--size-4);
            height: var(--control-height-large);
            font-size: var(--font-size-medium);
            border-radius: var(--border-radius-large);
        }
    }

    // 次要类型
    &-secondary {
        color: var(--color-text-1);
        background-color: var(--color-fill-2);
        &:hover {
            border-color: var(--color-border);
            background-color: var(--color-neutral-3);
        }
        &:active {
            background-color: var(--color-neutral-3);
        }
    }

    &-secondary&-status_normal {
        border: 1px solid var(--color-border-secondary);
    }

    &-secondary&-status_danger {
        color: var(--color-danger-11);
        background-color: var(--color-danger-3);
        &:hover, &:active {
            background-color: var(--color-danger-4);
        }
    }
    
    &-secondary&-status_warning {
        color: var(--color-warning-11);
        background-color: var(--color-warning-3);
        &:hover, &:active {
            background-color: var(--color-warning-4);
        }
    }

    &-secondary&-status_success {
        color: var(--color-success-11);
        background-color: var(--color-success-3);
        &:hover, &:active {
            background-color: var(--color-success-4);
        }
    }

    // 主要类型
    &-primary {
        color: white;
        background-color: var(--color-primary-9);
        &:hover, &:active {
            background-color: var(--color-primary-10);
        }
    }

    &-primary&-status_danger {
        color: white;
        background-color: var(--color-danger-9);
        &:hover, &:active {
            background-color: var(--color-danger-10);
        }
    }

    &-primary&-status_warning {
        color: var(--color-warning-12);
        background-color: var(--color-warning-9);
        &:hover, &:active {
            background-color: var(--color-warning-10);
        }
        [data-theme="dark"] & {
            color: var(--color-warning-1);
        }
    }

    &-primary&-status_success {
        color: white;
        background-color: var(--color-success-9);
        &:hover, &:active {
            background-color: var(--color-success-10);
        }
    }

    // 文本类型
    &-text {
        color: var(--color-text-2);
        &:hover,&:active {
            color: var(--color-text-1);
        }
    }

    &-text&-status_danger {
        color: var(--color-danger-9);
        &:hover,&:active {
            color: var(--color-danger-10);
        }
    }

    &-text&-status_success {
        color: var(--color-success-9);
        &:hover,&:active {
            color: var(--color-success-10);
        }
    }

    &-text&-status_warning {
        color: var(--color-warning-9);
        &:hover,&:active {
            color: var(--color-warning-10);
        }
    }

    &-long {
        width: 100%;
    }
}
</style>
