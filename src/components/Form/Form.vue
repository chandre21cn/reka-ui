<script setup lang="ts">
</script>

<template>
    <div class="ui-form">
        <slot />
    </div>
</template>

<style lang="less">
    .ui-form  {
        display: flex;
        flex-direction: column;
        gap: var(--size-4);
    }
</style>