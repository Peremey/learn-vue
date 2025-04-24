<template>
    <div>{{ count }}</div>
    <div>{{ piniaCount }}</div>
    <button type="button" @click="upd()">Update all</button>
</template>

<script setup lang="ts">
import { useCounter } from '@/composables/useCounter';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const { count } = useCounter()
const { count: piniaCount } = storeToRefs(useCounterStore())
const upd = () => {
    count.value++;
    piniaCount.value++;
}
</script>