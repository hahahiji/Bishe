<template>
    <div class="left-bottom">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.left-bottom {
  position: relative;
  width: calc(100% - 48px);
  height: calc(100% - 38px);
  padding: 12px;
  gap: 12px;
  left: 11px;
  top: 7px;
  background-color: #07182E;
  display: flex;
  border-radius: 8px;
  color: white;
}

.left-bottom::before {
  content: '';
  position: absolute;
  inset: 0;
  left: -8px;
  margin: auto;
  width: 105%;
  height: 104%;
  border-radius: 10px;
  background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
  z-index: -1;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>
