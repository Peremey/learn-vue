<template>
    <div class="alert" v-if="isOpen">
        <div class="alert__text">{{ text }}</div>
        <button class="alert__btn" type="button" @click="emit('update:isOpen', false)">OK</button>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
    isOpen: {
        type: Boolean as PropType<boolean>
    },
    text: {
        type: String as PropType<string>
    }
})
const emit = defineEmits<{
    (e: "update:isOpen", value: boolean): void
}>()
</script>

<style lang="css" scoped>
.alert {
    position: absolute;
    top: 50dvh;
    left: 50vw;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: 50dvh;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
}

.alert__text {
    flex: 1 1 auto;
    margin: auto;
    display: flex;
    align-items: center;
}

.alert__btn {
    cursor: pointer;
    width: 50%;
    margin: 5px;
    padding: 5px;
}
</style>