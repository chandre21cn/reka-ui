<script setup lang="ts">
import { AutocompleteAnchor, AutocompleteContent, AutocompleteInput, AutocompleteItem, AutocompletePortal, AutocompleteRoot, AutocompleteTrigger, AutocompleteViewport, useForwardPropsEmits } from 'reka-ui'
import { ChevronDown } from 'lucide-vue-next';
import type { AutocompleteRootProps, AutocompleteRootEmits } from 'reka-ui';
import { inputVariants, type InputVariants } from '.';

import { computed, useTemplateRef } from 'vue';
import '../styles/listbox.less'
import './input.less'

interface AutocompleteData {
    value: string | number;
    label: string;
    [key: string]: any;
}

interface AutocompleteProps extends AutocompleteRootProps {
    size?: InputVariants['size'];
    name?: string;
    placeholder?: string;
    options: string[] | number[] | AutocompleteData[];
}

interface AutocompleteEmits extends AutocompleteRootEmits {
    remove: [value: AutocompleteData]
}

const props = withDefaults(defineProps<AutocompleteProps>(), {
    asChild: true
})
const emits = defineEmits<AutocompleteEmits>()

const forwards = useForwardPropsEmits(props, emits)
const inputRef = useTemplateRef('inputRef')

const options = computed(() => {
    return props.options?.map(item => {
        if (typeof item == 'string' || typeof item == 'number') {
            return {
                value: item,
                label: String(item)
            }
        }
        return item
    }) ?? []
})

// 点击
function onPointerDown(event: PointerEvent) {
    const target = event.target as HTMLElement
    if (target.closest('input, button, a')) return;
    const input = inputRef.value?.$el
    if (!input) return;
    const cursorPosition = input.value.length;
    requestAnimationFrame(() => {
        try {
            input.setSelectionRange(cursorPosition, cursorPosition);
        } catch {}
        input.focus()
    })
}

// 点击删除选项
function onClickItem(value: AutocompleteData) {
    emits('remove', value)
}

</script>

<template>
    <AutocompleteRoot v-bind="forwards">
        <AutocompleteAnchor 
            :class="[ inputVariants(props), $attrs.class ]"
            @pointerdown="onPointerDown"
        >
            <span class="ui-input-prefix" v-if="$slots.prefix || $slots.icon">
                <span class="ui-input-icon" v-if="$slots.icon">
                    <slot name="icon" />
                </span>
                <slot name="prefix" v-else />
            </span>
            <AutocompleteInput
                ref="inputRef"
                :name="name"
                :placeholder="placeholder"
                type="text"
                class="ui-input-native"
            />
            <AutocompleteTrigger class="ui-input-button">
                <ChevronDown class="ui-input-icon" />
            </AutocompleteTrigger>
        </AutocompleteAnchor>

        <AutocompletePortal>
            <AutocompleteContent position="popper" :side-offset="4" align="start"  class="ui-listbox-content">
                <AutocompleteViewport class="ui-listbox-viewport">
                    <AutocompleteItem class="ui-listbox-item no-indicator" v-for="item in options" :value="item.value">
                        <span class="ui-listbox-label">
                            {{ item.label }}
                        </span>
                        <button class="ui-listbox-right-button" @click.stop="onClickItem(item)">
                            删除
                        </button>
                    </AutocompleteItem>
                </AutocompleteViewport>
            </AutocompleteContent>
    </AutocompletePortal>

    </AutocompleteRoot>
</template>
