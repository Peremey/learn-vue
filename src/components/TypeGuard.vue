<template>
    <div>{{ name }}</div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
    name: {
        type: Number as PropType<number>,
        default: 0
    }
})
</script>