<template>
    <svg aria-hidden="true" :style="styles">
        <use :href="symbolId" :fill="color" />
    </svg>
</template>

<script lang="ts" setup>
    import { computed } from 'vue'
    
    const props = defineProps({
        prefix: { type: String, default: 'icon' },
        name: { type: String, required: true },
        color: { type: String, default: 'currentColor' },
        size: { type: [ Number, String ], default: 14  }
    })

    const styles = computed(() => {
        let size = typeof props.size == 'string' ? props.size : props.size + 'px'
        return { width: size, height: size }
    })

    const symbolId = computed(() => {
        return `#${props.prefix}-${props.name}`
    })
</script>