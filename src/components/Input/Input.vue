<script setup lang="ts">
import { ref, computed, useTemplateRef } from 'vue';
import { inputVariants, type InputVariants } from '.'
import { Eye, EyeClosed } from 'lucide-vue-next';
import './input.less'

interface InputProps {
    name?: string;
    type?: 
        | 'date'
        | 'datetime-local'
        | 'email'
        | 'hidden'
        | 'month'
        | 'number'
        | 'password'
        | 'search'
        | 'tel'
        | 'text'
        | 'time'
        | 'url'
        | 'week';
    size?: InputVariants['size']
    placeholder?: string;
    disabled?: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
    placeholder: ''
})
const emits = defineEmits(['input', 'change'])
const inputRef = useTemplateRef('inputRef')
const showPassword = ref(false);
const model = defineModel<string | number>();

// 类型
const computedType = computed(() => {
    if (props.type === 'password') {
        return showPassword.value ? 'text' : 'password';
    }
    return props.type;
});

// 切换密码可见
function togglePasswordVisible() {
    showPassword.value = !showPassword.value;
    const input = inputRef.value
    if (!input) return;
    const cursorPosition    = input.value.length;
    requestAnimationFrame(() => {
        try {
            input.setSelectionRange(cursorPosition, cursorPosition);
        } catch {}
        input.focus()
    })
}

// 点击
function onPointerDown(event: PointerEvent) {
    const target = event.target as HTMLElement
    if (target.closest('input, button, a')) return;
    const input = inputRef.value
    if (!input) return;

    const cursorPosition    = input.value.length;
    requestAnimationFrame(() => {
        try {
            // 设置光标位置
            input.setSelectionRange(cursorPosition, cursorPosition);
        } catch {}
        // 获得焦点
        input.focus()
    })
}

</script>

<template>
    <div 
        :class="[inputVariants(props), $attrs.class]"
        @pointerdown="onPointerDown"
    >
        <span class="ui-input-prefix" v-if="$slots.prefix || $slots.icon">
            <span class="ui-input-icon" v-if="$slots.icon">
                <slot name="icon" />
            </span>
            <slot name="prefix" v-else />
        </span>
        <input 
            ref="inputRef"
            v-model="model"
            autocomplete="off"
            spellCheck="false"
            class="ui-input-native"
            :placeholder="placeholder"
            :name="name"
            :type="computedType"
            :disabled="disabled"
        />
        
        <span class="ui-input-suffix" v-if="$slots.suffix">
            <slot name="suffix" />
        </span>

        <button
            v-if="type === 'password'"
            type="button"
            tabindex="-1"
            class="ui-input-button"
            :disabled="disabled"
            @pointerdown.prevent
            @mousedown.prevent
            @click.stop="togglePasswordVisible"
        >
            <Eye v-if="showPassword" class="ui-input-icon" />
            <EyeClosed v-else class="ui-input-icon" />
        </button>
        
    </div>
</template>