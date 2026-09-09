<script setup lang="ts">
import {
    SelectContent,
    SelectItem,
    SelectItemText,
    SelectPortal,
    SelectRoot,
    SelectItemIndicator,
    SelectScrollDownButton,
    SelectScrollUpButton,
    SelectTrigger,
    SelectValue,
    SelectViewport,
    useForwardPropsEmits,
} from 'reka-ui'
import type { SelectRootProps, SelectRootEmits } from 'reka-ui';
import { inputVariants, type InputVariants } from '.'
import { ChevronDown, ChevronUp, Check } from 'lucide-vue-next';
import { computed } from 'vue';
import '../styles/listbox.less'

interface SelectOptionData {
    value: string | number;
    label?: string;
    [key: string]: any;
}

interface SelectProps extends SelectRootProps {
    placeholder?: string;
    size?: InputVariants['size'];
    data: string[] | number[] | SelectOptionData[]
}

const props = withDefaults(defineProps<SelectProps>(), {
    size: 'base',
    placeholder: '请选择'
})

const emits = defineEmits<SelectRootEmits>()
const forwards = useForwardPropsEmits(props, emits)

const options = computed(() => {
    return props.data.map(item => {
        if (typeof item == 'string' || typeof item == 'number') {
            return {
                value: item,
                label: String(item)
            }
        }
        return item
    })
})
</script>

<template>
    <SelectRoot v-bind="forwards">
        <SelectTrigger :class="['ui-select', inputVariants(props), $attrs.class]" :style="$attrs.style">
            <span class="ui-input-prefix" v-if="$slots.prefix">
                <slot name="prefix" />
            </span>
            <SelectValue :placeholder="props.placeholder" class="ui-input-native" />
            <span class="ui-input-button">
                <slot name="suffix">
                    <ChevronDown :size="14" class="ui-input-icon" />
                </slot>
            </span>
        </SelectTrigger>

        <SelectPortal>
            <SelectContent position="item-aligned" class="ui-listbox-content">
                <SelectScrollUpButton class="ui-listbox-scroll-button">
                    <ChevronUp :size="14" />
                </SelectScrollUpButton>

                <SelectViewport>
                    <SelectItem v-for="option in options" class="ui-listbox-item" :value="option.value">
                        <SelectItemIndicator class="ui-listbox-indicator">
                            <Check :size="14" />
                        </SelectItemIndicator>
                        <SelectItemText class="ui-listbox-label">
                            {{ option.label ?? option.value }}
                        </SelectItemText>
                    </SelectItem>
                </SelectViewport>

                <SelectScrollDownButton class="ui-listbox-scroll-button">
                    <ChevronDown :size="14" />
                </SelectScrollDownButton>
            </SelectContent>
        </SelectPortal>
    </SelectRoot>
</template>

<style lang="less">
.ui-select {
    &[data-state='open'], &:focus {
        border-color: var(--color-primary-9);
    }
}
</style>