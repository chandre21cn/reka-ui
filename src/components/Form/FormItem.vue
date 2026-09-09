<script setup lang="ts">
    export interface FormItemProps {
        label?: string;
        description?: string;
    }
    const props = defineProps<FormItemProps>()
</script>

<template>
    <div class="ui-form-item">
        <div class="ui-form-item-header" v-if="label || description || $slots.extra">
            <span class="ui-form-item_title">
                {{ label }}
            </span>
            <span class="ui-form-item_description">
                {{ description }}
            </span>
            <div class="ui-form-item_extra">
                <slot name="extra"></slot>
            </div>
        </div>
        <slot />
    </div>
</template>

<style lang="less">
    .ui-form-item  {
        display: flex;
        flex-direction: column;
        gap: var(--size-1);

        &-header {
            display: flex;
            align-items: center;
            gap: var(--size-4);
        }

        &_title {
            font-size: var(--font-size-base);
            color: var(--color-text-2);
        }

        &_description {
            flex: 1;
            font-size: var(--font-size-small);
            color: var(--color-text-4);
        }

        &_extra {
            font-size: var(--font-size-small);
            color: var(--color-text-4);
        }
    }
</style>