<template>
    <div class="timeline-container">
        <div class="timeline-point" v-for="(item, index) in timeline" :key="index" @click="updateView(index)"
            :class="{ 'active': currentIndex === index }">
        </div>
        <button @click="pauseTour">暂停</button>
        <button @click="resumeTour">继续</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isPasued = ref(false)
const pauseTour = () => {
    isPasued.value = true
}
const resumeTour = () => {
    isPasued.value = false
}
</script>

<style lang="scss" scoped>
.timeline-container {
    position: relative;
    width: 100%;
    margin-top: 10px;
}

.timeline-point {
    position: absolute;
    bottom: 0;
    width: 10px;
    height: 10px;
    background-color: #ddd;
    border-radius: 50%;
    cursor: pointer;
}

.timeline-point.active {
    background-color: #333;
}
</style>