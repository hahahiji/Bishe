<template>
  <div class="right-bottom">
    <div class="showbox">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.right-bottom {
width: 100%;
height: 100%;
background: #07182E;
position: relative;
display: flex;
place-content: center;
place-items: center;
overflow: hidden;
border-radius: 20px;
}

.right-bottom .showbox {
z-index: 1;
color: white;
}

.right-bottom::before {
content: '';
position: absolute;
width: 137%;
background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
height: 60%;
animation: rotBGimg 3s linear infinite;
transition: all 0.2s linear;
}

.right-bottom::after {
content: '';
position: absolute;
background: #07182E;
;
inset: 5px;
border-radius: 15px;
}

@keyframes rotBGimg {
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
}
</style>
