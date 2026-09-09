<script setup lang="ts">
import { DropdownMenuSeparator } from 'reka-ui'
</script>

<template>
    <DropdownMenuSeparator />
</template>

<style lang="less">
.ui-dropdown-menu {
    &-separator {
        margin: var(--size-2) var(--size-3);
        background-color: var(--color-border-secondary);
        height: 1px;
    }
}
</style>