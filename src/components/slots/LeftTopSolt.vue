<template>
    <div class="left-top">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.left-top {
  --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
  width: calc(100% - 14px);
  height: calc(100% - 14px);
  padding: 7px;
  border-radius: 1rem;
  overflow: visible;
  background: #f7ba2b;
  background: var(--background);
  position: relative;
  z-index: 1;
}

.left-top::after {
  position: absolute;
  content: "";
  top: 30px;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  transform: scale(0.8);
  filter: blur(25px);
  background: #f7ba2b;
  background: var(--background);
}
</style>
