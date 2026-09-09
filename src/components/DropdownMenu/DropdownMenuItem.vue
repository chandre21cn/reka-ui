<script setup lang="ts">
import { DropdownMenuItem, useForwardPropsEmits } from 'reka-ui'
import type { DropdownMenuItemEmits, DropdownMenuItemProps } from 'reka-ui';
import '../styles/listbox.less'
const props = withDefaults(defineProps<DropdownMenuItemProps>(), {
})
const emits = defineEmits<DropdownMenuItemEmits>()
const forwards = useForwardPropsEmits(props, emits)
</script>

<template>
    <DropdownMenuItem class="ui-listbox-item no-indicator" v-bind="forwards">
        <slot />
    </DropdownMenuItem>
</template>
