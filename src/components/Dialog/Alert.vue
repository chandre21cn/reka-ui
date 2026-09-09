<template>
    <Dialog 
        ref="dialogRef"
        :width="360"
        :title="props.title"
        :description="props.message"
        :closable="false"
    >
        <template #footer>
            <Button @click="onClickCancel">{{  props.cancelText  }}</Button>
            <Button variant="primary" :status="buttonStatus" @click="onClickConfirm">{{  props.confirmText  }}</Button>
        </template>
    </Dialog>
</template>

<script setup lang="ts">
import { computed, useTemplateRef } from 'vue';
import { Button } from '../Button';
import { Dialog } from './index.ts';

// 组件属性
export interface AlertProps {
    // 类型
    type?: 'info' | 'success' | 'warn' | 'error',
    // 标题
    title: string;
    // 消息内容
    message: string;
    // 确认按钮的内容
    confirmText?: string;
    // 取消按钮的内容
    cancelText?: string;
    // 确定回调
    onConfirm?: () => boolean | undefined | Promise<boolean | undefined>
}


const props = withDefaults(defineProps<AlertProps>(), {
    type: 'info',
    cancelText: '取消',
    confirmText: '确定',
})

// 确定按键类型
const buttonStatus = computed(() => {
    switch(props.type) {
        case 'error':           return 'danger';
        case 'warn':            return 'warning';
        case 'success':         return 'success';
        case 'info': default:   return 'normal'
    }
})

const dialogRef = useTemplateRef('dialogRef')

defineExpose({
    open: () => dialogRef.value?.show(),
    close: () => dialogRef.value?.hide()
})

// 点击取消
async function onClickCancel() {
    dialogRef.value?.hide()
}

// 点击确认
async function onClickConfirm() {
    if (props.onConfirm && typeof props.onConfirm == 'function') {
        if (!await props.onConfirm()) return;
    }
    dialogRef.value?.hide()
}

</script>

<script lang="ts">
import AlertComponent from './Alert.vue'
import { createVNode, render, reactive } from 'vue';


// 配置选项
type AlertOptions = Pick<AlertProps, 'confirmText' | 'cancelText' | 'onConfirm'>

const globalOptions = reactive<AlertProps>({
    type: 'info',
    title: '',
    message: '',
    confirmText: '确定',
    cancelText: '取消',
    onConfirm: undefined
});

// 初始化挂载到 body
let alertInstance: any = null;
let globalContainer: HTMLDivElement | null = null; // 抽离容器引用

// 初始化挂载到 body 的容器
function initAlertContainer() {
    if (!globalContainer) {
        globalContainer = document.createElement('div');
        globalContainer.className = 'ui-alert';
        document.body.appendChild(globalContainer);
    }
    return globalContainer;
}

// 统一调度
function showAlert(type: AlertProps['type'] = 'info', title: string, message: string, options?: AlertOptions) {
    const container = initAlertContainer();
    // 更新配置选项
    globalOptions.type             = type;
    globalOptions.title            = title;
    globalOptions.message          = message;
    globalOptions.confirmText      = options?.confirmText ?? '确定';
    globalOptions.cancelText       = options?.cancelText ?? '取消';
    globalOptions.onConfirm        = options?.onConfirm;

    const vnode = createVNode(AlertComponent, globalOptions);
    render(vnode, container);

    alertInstance = vnode.component?.exposed;
    alertInstance?.open()
}


export const Alert = {
    info(title: string, message: string, options?: AlertOptions) { 
        showAlert('info', title, message, options)
    },
    success(title: string, message: string, options?: AlertOptions) { 
        showAlert('success', title, message, options)
    },
    warn(title: string, message: string, options?: AlertOptions) { 
        showAlert('warn', title, message, options)
    },
    error(title: string, message: string, options?: AlertOptions) { 
        showAlert('error', title, message, options)
    }
};
</script>
