<template>
    <TabsTrigger v-bind="forwarded" class="ui-segmented-item">
        {{ label }}
    </TabsTrigger>
</template>

<script setup lang="ts">
import { TabsTrigger, useForwardPropsEmits, type TabsTriggerProps } from 'reka-ui';
interface SegmentedItemProps extends TabsTriggerProps {
    label: string;
}
const props = defineProps<SegmentedItemProps>()
const forwarded = useForwardPropsEmits(props);
</script>