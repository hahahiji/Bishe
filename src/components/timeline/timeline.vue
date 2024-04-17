<template>
  <div class="banner">
    <div class="buttonwarp">
      <button @click="start">
        <span></span>
        <span></span>
        <span></span>
        <span></span> 开始
      </button>
      <button @click="end">
        <span></span>
        <span></span>
        <span></span>
        <span></span> 结束
      </button>
    </div>
    <div class="animation-container">
      <div class="boxbar" id="boxbar">
        <div class="box" v-for="(box, index) in timedata" :key="index" :ref="`box${index + 1}`"
          @click="bindcolor(index)">
          <span style="display: block; height: 100%; width: 100px;">{{ box }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable)
const tl = gsap.timeline().addLabel('sync');
const timedata = ref(['1982', '1985', '1988', '1991', '1994', '1997', '2000', '2003', '2006', '2009', '2012', '2015', '2018'])
onMounted(() => {
  Draggable.create("#boxbar", {
    type: "x",
    // dragClickables:true
  });
})
const bindcolor = (index) => {
  const boxes = gsap.utils.toArray('.box');
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.color = "white"
  }
  boxes[index].style.color = "#ae00ff"
}
const start = () => {
  const boxes = gsap.utils.toArray('.box');
  tl.to(boxes[0], { color: "#ae00ff" },)
    .to('.boxbar', { x: -100, duration: 1.5, stagger: 0.1, ease: "power1.out", }, '-=0.1')
    .to(boxes[1], { color: "#ae00ff" },)
    .to('.boxbar', { x: -200, duration: 1.5, stagger: 0.1, ease: "power1.out", }, '-=0.1')
    .to(boxes[2], { color: "#ae00ff" },)
    .to('.boxbar', { x: -300, duration: 1.5, stagger: 0.1, ease: "power1.out", }, '-=0.1')
    .to(boxes[3], { color: "#ae00ff" },)
    .to('.boxbar', { x: -400, duration: 1.5, stagger: 0.1, ease: "power1.out", }, '-=0.1')
    .to(boxes[4], { color: "#ae00ff" },)
    .to('.boxbar', { x: -500, duration: 1.5, stagger: 0.1, ease: "power1.out", }, '-=0.1')
    .to(boxes[5], { color: "#ae00ff" })
    .to('.boxbar', { x: -600, duration: 1.5, stagger: 0.1, ease: "power1.out", }, '-=0.1')
    .to(boxes[6], { color: "#ae00ff" })
    .to('.boxbar', { x: -700, duration: 1.5, stagger: 0.1, ease: "power1.out", }, '-=0.1')
    .to(boxes[7], { color: "#ae00ff" })
    .to('.boxbar', { x: -800, duration: 1.5, stagger: 0.1, ease: "power1.out", }, '-=0.1')
    .to(boxes[8], { color: "#ae00ff" })
    .to('.boxbar', { x: -900, duration: 1.5, stagger: 0.1, ease: "power1.out", }, '-=0.1')
    .to(boxes[9], { color: "#ae00ff" })
    .to('.boxbar', { x: -1000, duration: 1.5, stagger: 0.1, ease: "power1.out", }, '-=0.1')
    .to(boxes[10], { color: "#ae00ff" })
    .to('.boxbar', { x: -1100, duration: 1.5, stagger: 0.1, ease: "power1.out", }, '-=0.1')
    .to(boxes[11], { color: "#ae00ff" })
    .to('.boxbar', { x: -1200, duration: 1.5, stagger: 0.1, ease: "power1.out", }, '-=0.1')
    .to(boxes[12], {
      color: "#ae00ff", onComplete: () => {
        for (let i = 0; i < boxes.length - 1; i++) {
          boxes[i].style.color = "white"
        }
      }
    })
}

const end = () => {
  tl.pause()
}
</script>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 60px;
  line-height: 50px;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
  // margin-left: 20px;
}

.active {
  font-size: 35px;
}

.animation-container {
  height: 100%;
  width: 680px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.boxbar {
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: row;
  align-items: center;
}

.banner {
  width: 100%;
  height: 100%;
  position: relative;
}

.buttonwarp {
  position: absolute;
  z-index: 10;
}

button {
  position: relative;
  padding: 1em 1.8em;
  outline: none;
  border: 1px solid #303030;
  background: #212121;
  color: #ae00ff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 15px;
  overflow: hidden;
  transition: 0.2s;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 20px
}

button:hover {
  box-shadow: 0 0 10px #ae00ff, 0 0 25px #001eff, 0 0 50px #ae00ff;
  transition-delay: 0.6s;
}

button span {
  position: absolute;
}

button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ae00ff);
}

button:hover span:nth-child(1) {
  left: 100%;
  transition: 0.7s;
}

button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #001eff);
}

button:hover span:nth-child(3) {
  right: 100%;
  transition: 0.7s;
  transition-delay: 0.35s;
}

button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #ae00ff);
}

button:hover span:nth-child(2) {
  top: 100%;
  transition: 0.7s;
  transition-delay: 0.17s;
}

button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #001eff);
}

button:hover span:nth-child(4) {
  bottom: 100%;
  transition: 0.7s;
  transition-delay: 0.52s;
}

button:active {
  background: #ae00af;
  background: linear-gradient(to top right, #ae00af, #001eff);
  color: #bfbfbf;
  box-shadow: 0 0 8px #ae00ff, 0 0 8px #001eff, 0 0 8px #ae00ff;
  transition: 0.1s;
}

button:active span:nth-child(1) span:nth-child(2) span:nth-child(2) span:nth-child(2) {
  transition: none;
  transition-delay: none;
}
</style>