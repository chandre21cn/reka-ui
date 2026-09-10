<template>
    <svg aria-hidden="true" :style="styles">
        <use :href="symbolId" :fill="color" />
    </svg>
</template>

<script lang="ts" setup>
    import { computed } from 'vue'
    
    interface IconProps {
        prefix?: string;
        name: string;
        color?: string;
        size?: string | number;
    }

    const props = withDefaults(defineProps<IconProps>(), {
        prefix: 'icon',
        color: 'currentColor',
        size: 14
    })

    const styles = computed(() => {
        let size = typeof props.size == 'string' ? props.size : props.size + 'px'
        return { width: size, height: size }
    })

    const symbolId = computed(() => {
        return `#${props.prefix}-${props.name}`
    })
</script>