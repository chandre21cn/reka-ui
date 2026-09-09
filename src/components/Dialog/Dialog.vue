<template>
    <DialogRoot v-model:open="visible">
        <DialogTrigger v-if="$slots.trigger" as-child>
            <slot name="trigger" />
        </DialogTrigger>

        <DialogPortal>
            <!-- 遮罩层 -->
            <DialogOverlay class="ui-dialog-overlay" v-if="!hideOverlay" />

            <!-- 窗口 -->
            <DialogContent 
                class="ui-dialog-content" 
                :style="contentStyles"
                @escape-key-down="onEscapeKeyDown"
                @pointer-down-outside="onClickOverlay"
            >
                <!-- 头栏 -->
                <div class="ui-dialog-header">
                    <!-- 标题 -->
                    <DialogTitle class="ui-dialog-header_title">
                        <slot name="title">
                            {{ title }}
                        </slot>
                    </DialogTitle>
                    <!-- 描述信息 -->
                    <DialogDescription class="ui-dialog-header_description" v-show="!!description">
                        <slot name="description">
                            {{ description }}
                        </slot>
                    </DialogDescription>
                </div>

                <!-- 主体内容 -->
                <slot />
                
                <!-- 底栏 -->
                <div class="ui-dialog-footer" v-if="!hideFooter || !$slots.footer">
                    <slot name="footer">
                        <!-- 取消 -->
                        <Button @click="onClickCancel">
                            {{  cancelText  }}
                        </Button>
                        <!-- 确定 -->
                        <Button variant="primary" @click="onClickConfirm">
                            {{ confirmText }}
                        </Button>
                    </slot>
                </div>

                <!-- 关闭 -->
                <button class="ui-dialog-close" @click="onClickClose" v-if="closable">
                    <X :size="16" />
                </button>
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { DialogRoot, DialogContent, DialogDescription, DialogPortal, DialogOverlay, DialogTitle, DialogTrigger } from 'reka-ui';
import { X } from 'lucide-vue-next';
import { Button } from '../Button';
import type { DialogContentEmits, PointerDownOutsideEvent } from 'reka-ui'

const visible = ref(false)

interface DialogProps {
    // 标题
    title?: string;
    // 宽度
    width?: string | number;
    // 描述
    description?: string;
    // 是否显示关闭按钮
    closable?: boolean;
    // 是否隐藏标题
    hideTitle?: boolean;
    // 是否展示页脚部分
    hideFooter?: boolean;
    // 隐藏遮罩层
    hideOverlay?: boolean;
    // 是否隐藏取消按钮
    hideCancel?: boolean;
    // 确认按钮的内容
    confirmText?: string;
    // 取消按钮的内容
    cancelText?: string;
    // 是否支持 ESC 键关闭对话框
    escToClose?: boolean;
    // 是否点击遮罩层可以关闭对话框
    overlayToClose?: boolean;
    // 取消回调
    onCancel?: () => boolean | Promise<boolean>;
    // 确定回调
    onConfirm?: () => boolean | Promise<boolean>;
}

const props = withDefaults(defineProps<DialogProps>(), {
    title: '标题',
    width: '500px',
    confirmText: '确定',
    cancelText: '取消',
    closable: true,
});

const emits = defineEmits<DialogContentEmits>();

defineExpose({
    show() {
        visible.value = true
    },
    hide() {
        visible.value = false
    }
})

const contentStyles = computed(() => {
    let width = 'auto'
    if (typeof props.width == 'number') {
        width = props.width + 'px'
    }
    return { 
        width
    }
})

// 键盘 ESC 关闭
function onEscapeKeyDown(event: KeyboardEvent) {
    if (!props.escToClose) {
        event.preventDefault()
    }
}

// 点击遮罩层
function onClickOverlay(event: PointerDownOutsideEvent) {
    if (!props.overlayToClose) {
        event.preventDefault()
    }
}

// 点击关闭
function onClickClose(event: PointerEvent) {
    event.preventDefault()
    visible.value = false
}

// 点击取消
async function onClickCancel() {
    if (props.onCancel && typeof props.onCancel == 'function') {
        const status = await props.onCancel()
        if (status) {
            visible.value = false
        } else {
            visible.value = true
        }
    } else {
        visible.value = false
    }
}

// 点击确定
async function onClickConfirm(event: PointerEvent) {
    event.preventDefault()
    if (props.onConfirm && typeof props.onConfirm == 'function') {
        const status = await props.onConfirm()
        if (status) {
            visible.value = false
        } else {
            visible.value = true
        }
    } else {
        visible.value = false
    }
}
</script>

<style lang="less">
.ui-dialog {

    &-overlay {
        position: fixed;
        z-index: 50;
        inset: 0;
        animation: ui-fade-in 0.2s ease-out;
        background-color: var(--color-black-a10);
        &[data-state="open"] {
            animation: ui-fade-in 0.2s ease-out;
        }
        &[data-state="closed"] {
            animation: ui-fade-out 0.2s ease-in;
        }
    }

    &-close {
        position: absolute;
        top: var(--size-3);
        right: var(--size-3);
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--control-height-small);
        height: var(--control-height-small);
        border-radius: var(--border-radius-small);
        padding: 0;
        transition-duration: 150ms;
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        color: var(--color-text-3);
        &:hover {
            color: var(--color-text-2);
        }
    }

    &-content {
        position: fixed;
        z-index: 50;
        top: 50%;
        left: 50%;
        display: grid;
        max-width: 80vw;
        transform: translate(-50%, -50%);
        transition-duration: 200ms;
        font-size: var(--font-size-base);
        // border: 1px solid var(--color-border-secondary);
        background-color: var(--color-fill-1);
        box-shadow: var(--shadow-6);
        border-radius: var(--border-radius-large);
        padding: var(--size-6);
        gap: var(--size-4);

        &[data-state="open"] {
            animation: ui-dialog-show 0.2s ease-out;
        }
        &[data-state="closed"] {
            animation: ui-dialog-hide 0.2s ease-in;
        }
    }

    &-header {
        display: flex;
        flex-direction: column;
        gap: var(--size-2);
        &_title {
            color: var(--color-text-1);
            font-size: var(--font-size-medium);
            font-weight: 600;
            letter-spacing: -0.025em;
            line-height: 1;
        }

        &_description {
            color: var(--color-text-3);
        }
    }

    &-footer {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: var(--size-2)
    }
}

</style>