<script setup lang="ts" generic="T extends boolean | string | number = boolean">
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'
import { Check } from 'lucide-vue-next';

export interface CheckboxProps<T = boolean> {
    /** 选中时的值，默认为 true */
    trueValue?: T;
    /** 未选中时的值，默认为 false */
    falseValue?: T;
    /** 表单提交时的原生 value，默认为 'on' */
    value?: string;
    /** 默认值 (非受控) */
    defaultValue?: T;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否必填 */
    required?: boolean;
    /** 表单字段名 */
    name?: string;
}

const props = withDefaults(defineProps<CheckboxProps>(), {
    disabled: false,
    required: false,
})

const emit = defineEmits<{
    (e: 'change', value: T): void
}>()

const model = defineModel<T>()
</script>

<template>
    <label class="ui-checkbox" :class="{ 'is-disabled': disabled }">
        <CheckboxRoot 
            :model-value="model as any"
            @update:model-value="(val: unknown) => {
                model = val as T;
                emit('change', val as T);
            }"
            :true-value="trueValue"
            :false-value="falseValue"
            :default-value="defaultValue"
            :value="value"
            :disabled="disabled"
            :required="required"
            :name="name"
            class="ui-checkbox-root"
        >
            <CheckboxIndicator class="ui-checkbox-indicator">
                <Check :size="14" />
            </CheckboxIndicator>
        </CheckboxRoot>
        <span v-if="$slots.default" class="ui-checkbox-label">
            <slot />
        </span>
    </label>
</template>

<style lang="less">
.ui-checkbox {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    cursor: pointer;

    &.is-disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }

    &-root {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--size-5);
        height: var(--size-5);
        border-radius: var(--border-radius-small);
        border: 1px solid var(--color-border-secondary);
        background-color: var(--color-fill-1);
        margin: 0;
        padding: 0;
        outline: none;

        &[data-state="checked"] {
            border-color: var(--color-primary-9);
            background-color: var(--color-primary-9);
        }
    }

    &-indicator {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-white-a12);
    }

    &-label {
        display: inline-flex;
        margin-left: var(--size-2);
        color: var(--color-text-2);
        font-size: var(--font-size-base);
        user-select: none;
    }
}
</style>