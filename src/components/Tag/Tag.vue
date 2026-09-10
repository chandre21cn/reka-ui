<template>
    <span :class="['ui-tag', `ui-tag_${ type }`]">
        <slot />
    </span>
</template>

<script setup lang="ts">
interface TagProps {
    type?: 'default' | 'primary' | 'danger' | 'warning' | 'success'
}
const props = withDefaults(defineProps<TagProps>(), {
    type: 'default'
})
</script>

<style lang="less">
    .ui-tag {
        display: inline-flex;
        height: var(--size-6);
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        padding: 0 var(--size-2);
        font-size: var(--font-size-small);
        color: var(--color-text-2);
        background-color: var(--color-fill-a3);
        border-radius: var(--border-radius-small);

        &_primary {
            color: var(--color-primary-10);
            background-color: var(--color-primary-a3);
        }
        &_danger {
            color: var(--color-danger-10);
            background-color: var(--color-danger-a3);
        }
        &_warning {
            color: var(--color-warning-11);
            background-color: var(--color-warning-a3);
        }
        &_success {
            color: var(--color-success-10);
            background-color: var(--color-success-a3);
        }
    }
</style>