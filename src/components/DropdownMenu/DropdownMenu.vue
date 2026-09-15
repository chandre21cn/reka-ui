<script setup lang="ts">
import { DropdownMenuContent, DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger, useForwardPropsEmits } from 'reka-ui'
import type { DropdownMenuContentProps, DropdownMenuContentEmits } from 'reka-ui';
import '../styles/listbox.less'

interface DropdownMenuProps extends DropdownMenuContentProps {
    isDark?: boolean
}

const props = withDefaults(defineProps<DropdownMenuProps>(), {
    // 对齐
    align: 'start',
    // 位置
    side: 'bottom',
    // 菜单与触发器距离
    sideOffset: 4,
})
const emits = defineEmits<DropdownMenuContentEmits>()
const forwards = useForwardPropsEmits(props, emits)
</script>

<template>
    <DropdownMenuRoot v-slot="{ open }">
        <DropdownMenuTrigger as-child>
            <slot :open="open" />
        </DropdownMenuTrigger>

        <DropdownMenuPortal>
            <DropdownMenuContent class="ui-listbox-content"  v-bind="forwards" :data-theme=" isDark ? 'dark' : undefined ">
                <slot name="content" />
            </DropdownMenuContent>
        </DropdownMenuPortal>
    </DropdownMenuRoot>
</template>
