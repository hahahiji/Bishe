<template>
  <div class="wrapper">
    <div class="top">
      <el-header class="sys-header">
        <div class="header-inner">中国植被生产力对干湿变化的响应可视化系统</div>
      </el-header>
    </div>
    <div class="container">
      <div class="colunm">
        <div class="panel">
          <LeftTopSolt>
            <LeftTop v-if="currentRoute === 'gpp'" />
            <speilefttop v-if="currentRoute === 'spei'" />
            <xiangguanleft v-if="currentRoute === 'xiangguan'" />
            <tzleft v-if="currentRoute === 'tezheng'" />
            <sjleft v-if="currentRoute === 'shijian'" />
            <yxleft v-if="currentRoute === 'yingxiang'" />
          </LeftTopSolt>
        </div>
        <div class="panel">
          <LeftBottomSlot>
            <LeftBottom v-if="currentRoute === 'gpp'" />
            <speileftbottom v-if="currentRoute === 'spei'" />
            <xiangguanbottom v-if="currentRoute === 'xiangguan'" />
            <tzbottom v-if="currentRoute === 'tezheng'" />
            <sjbottom v-if="currentRoute === 'shijian'" />
            <yxbottom v-if="currentRoute === 'yingxiang'" />
          </LeftBottomSlot>
        </div>
      </div>
      <div class="colunm">
        <div class="mapbox">
          <div class="title">
            <label class="icon-menu" for="check-icon" @click="showmenu">
              <div class="bar bar--1"></div>
              <div class="bar bar--2"></div>
              <div class="bar bar--3"></div>
            </label>
            <div style="color: white; font-weight: bold; margin-left: 5px;">{{ title }}</div>
            <div class="input" v-if="menu">
              <button class="value" @click="jumppage('gpp')">
                植被初级生产力变化
              </button>
              <button class="value" @click="jumppage('spei')">
                干湿程度变化
              </button>
              <button class="value" @click="jumppage('xiangguan')">
                植被生产力对干湿变化的响应关系
              </button>
              <button class="value" @click="jumppage('tezheng')">
                植被生产力对干湿变化的响应程度变化特征
              </button>
              <button class="value" @click="jumppage('shijian')">
                植被生产力对干湿变化响应时间
              </button>
              <button class="value" @click="jumppage('yingxiang')">
                水分亏缺和水分过剩对植被生产力的影响
              </button>
            </div>
          </div>
          <div class="map">
            <div class="bg uwu"></div>
            <div class="bg"></div>
            <MapView>
              <gppLegend v-if="currentRoute === 'gpp'" />
              <speiLegend v-if="currentRoute === 'spei'" />
              <xgLegend v-if="currentRoute === 'xiangguan'" />
              <tzLegend v-if="currentRoute === 'tezheng'" />
              <sjLegend v-if="currentRoute === 'shijian'" />
              <yxLegend v-if="currentRoute === 'yingxiang'" />
            </MapView>
          </div>
        </div>
          <div class="timebar">
            <timeline v-if="currentRoute === 'spei' || currentRoute === 'gpp'" :leixing="currentRoute" />
            <middombtom v-if="currentRoute === 'xiangguan'" />
            <tzmiddombtom v-if="currentRoute === 'tezheng'" />
            <sjmiddombtom v-if="currentRoute === 'shijian'" />
            <yxmiddombtom v-if="currentRoute === 'yingxiang'" />
          </div>
      </div>
      <div class="colunm">
        <div class="panel">
          <RightTopSlot>
            <RightTop v-if="currentRoute === 'gpp'" />
            <speirighttop v-if="currentRoute === 'spei'" />
            <xgrtop v-if="currentRoute === 'xiangguan'" />
            <tzrtop v-if="currentRoute === 'tezheng'" />
            <sjrtop v-if="currentRoute === 'shijian'" />
            <yxrtop v-if="currentRoute === 'yingxiang'" />
          </RightTopSlot>
        </div>
        <div class="panel">
          <RightBottomSlot>
            <RightBottom v-if="currentRoute === 'gpp'" />
            <speirightbottom v-if="currentRoute === 'spei'" />
            <xgrbottom v-if="currentRoute === 'xiangguan'" />
            <tzrbottom v-if="currentRoute === 'tezheng'" />
            <sjrbottom v-if="currentRoute === 'shijian'" />
            <yxrbottom v-if="currentRoute === 'yingxiang'" />
          </RightBottomSlot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import bus from 'vue3-eventbus'
import MapView from './arcgisMapView/Map.vue';
import LeftTopSolt from './slots/LeftTopSolt.vue';
import LeftBottomSlot from './slots/LeftBottomSolt.vue';
import RightBottomSlot from './slots/RightBottomSolt.vue';
import RightTopSlot from './slots/RightTopSolt.vue';

import gppLegend from './legend/gppLegend.vue';
import speiLegend from './legend/speiLegend.vue';
import xgLegend from './legend/xgLegend.vue';
import tzLegend from './legend/tzLegend.vue';
import sjLegend from './legend/sjLegend.vue';
import yxLegend from './legend/yxLegend.vue';

import LeftTop from './chartsView/LeftTop.vue';
import LeftBottom from './chartsView/LeftBottom.vue';
import RightTop from './chartsView/RightTop.vue';
import RightBottom from './chartsView/RightBottom.vue';

import speilefttop from './views/spei/lefttop.vue';
import speileftbottom from './views/spei/leftbottom.vue';
import speirighttop from './views/spei/righttop.vue';
import speirightbottom from './views/spei/rightbottom.vue';

import xiangguanleft from './views/xiangguan/lefttop.vue';
import xiangguanbottom from './views/xiangguan/leftbottom.vue';
import xgrtop from './views/xiangguan/righttop.vue';
import xgrbottom from './views/xiangguan/rightbottom.vue';
import middombtom from './views/xiangguan/middombottom.vue';

import tzleft from './views/tezheng/lefttop.vue';
import tzbottom from './views/tezheng/leftbottom.vue';
import tzrtop from './views/tezheng/righttop.vue';
import tzrbottom from './views/tezheng/rightbottom.vue';
import tzmiddombtom from './views/tezheng/middombottom.vue';

import yxleft from './views/yingxiang/lefttop.vue';
import yxbottom from './views/yingxiang/leftbottom.vue';
import yxrtop from './views/yingxiang/righttop.vue';
import yxrbottom from './views/yingxiang/rightbottom.vue';
import yxmiddombtom from './views/yingxiang/middombottom.vue';

import sjleft from './views/shijian/lefttop.vue';
import sjbottom from './views/shijian/leftbottom.vue';
import sjrtop from './views/shijian/righttop.vue';
import sjrbottom from './views/shijian/rightbottom.vue';
import sjmiddombtom from './views/shijian/middombottom.vue';
import timeline from './timeline/timeline.vue';
import { nextTick, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const title = ref('植被初级生产力变化');
const menu = ref(false);
const currentRoute = ref('gpp');
const showmenu = () => {
  menu.value = !menu.value;
  const iconMenu = document.querySelector('.icon-menu');
  iconMenu.style.setProperty('--pos-y-bar-one', menu.value ? 'calc(var(--gap) + var(--height-bar))' : '0');
  iconMenu.style.setProperty('--pos-y-bar-three', menu.value ? 'calc(var(--gap) + var(--height-bar))' : '0');
  iconMenu.style.setProperty('--scale-bar', menu.value ? '0' : '1');
  iconMenu.style.setProperty('--rotate-bar-one', menu.value ? '45deg' : '0');
  iconMenu.style.setProperty('--rotate-bar-three', menu.value ? '-45deg' : '0');
}

const jumppage = (value) => {
  menu.value = false;
  if (value === 'gpp') {
    title.value = '植被初级生产力变化';
  } else if (value === 'spei') {
    title.value = '干湿程度变化';
  } else if (value === 'xiangguan') {
    title.value = '植被生产力对干湿变化的响应关系';
  } else if (value === 'tezheng') {
    title.value = '植被生产力对干湿变化的响应程度变化特征';
  } else if (value === 'shijian') {
    title.value = '植被生产力对干湿变化响应时间';
  } else if (value === 'yingxiang') {
    title.value = '水分亏缺和水分过剩对植被生产力的影响';
  }
  router.push({ name: value });

  currentRoute.value = value;
  bus.emit('changeRoute', { currentRoute: value });
  nextTick(() => {
    const iconMenu = document.querySelector('.icon-menu');
    iconMenu.style.setProperty('--pos-y-bar-one', '0');
    iconMenu.style.setProperty('--pos-y-bar-three', '0');
    iconMenu.style.setProperty('--scale-bar', '1');
    iconMenu.style.setProperty('--rotate-bar-one', '0');
    iconMenu.style.setProperty('--rotate-bar-three', '0');
  });
}
</script>

<style lang="scss" scoped>
$var1: #002133;
$var2: #ffffff;
$var3: #ff6356;

.wrapper {
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -20;
  background-color: #07182E;
}

.container {
  height: calc(100vh - 70px);
  width: 100%;
  padding-top: 10px;
  display: flex;

  .colunm {
    flex: 3;

    .panel {
      height: calc(50% - 10px);
      width: 100%;
      // padding: 0 15px 40px;
      margin-bottom: 10px;
    }
  }

  .mapbox {
    height: 70%;
    padding: 0 15px;
    padding-top: 5px;
    // background-color: #00ff00;

    .title {
      display: flex;
      height: 21px;

      .icon-menu {
        --gap: 5px;
        --height-bar: 2.5px;
        --pos-y-bar-one: 0;
        --pos-y-bar-three: 0;
        --scale-bar: 1;
        --rotate-bar-one: 0;
        --rotate-bar-three: 0;
        width: 25px;
        display: flex;
        flex-direction: column;
        gap: var(--gap);
        cursor: pointer;
        position: relative;
      }

      .bar {
        position: relative;
        height: var(--height-bar);
        width: 100%;
        border-radius: .5rem;
        background-color: #9941fc;
      }

      .bar--1 {
        top: var(--pos-y-bar-one);
        transform: rotate(var(--rotate-bar-one));
        transition: top 200ms 100ms, transform 100ms;
      }

      .bar--2 {
        transform: scaleX(var(--scale-bar));
        transition: transform 150ms 100ms;
      }

      .bar--3 {
        bottom: var(--pos-y-bar-three);
        transform: rotate(var(--rotate-bar-three));
        transition: bottom 200ms 100ms, transform 100ms;
      }

      // .check-icon:checked+.icon-menu>.bar--1 {
      //   transition: top 200ms, transform 200ms 100ms;
      // }

      // .check-icon:checked+.icon-menu>.bar--3 {
      //   transition: bottom 200ms, transform 200ms 100ms;
      // }

      // .check-icon:checked+.icon-menu {
      //   --pos-y-bar-one: calc(var(--gap) + var(--height-bar));
      //   --pos-y-bar-three: calc(var(--gap) + var(--height-bar));
      //   --scale-bar: 0;
      //   --rotate-bar-one: 45deg;
      //   --rotate-bar-three: -45deg;
      // }

      .input {
        display: flex;
        flex-direction: column;
        width: 200px;
        background-color: #0D1117;
        justify-content: center;
        border-radius: 5px;
        position: absolute;
        top: 100px;
        left: 400px;
        z-index: 99;
      }

      .value {
        background-color: transparent;
        border: none;
        padding: 10px;
        color: white;
        display: flex;
        position: relative;
        gap: 5px;
        cursor: pointer;
        border-radius: 4px;
      }

      .value:not(:active):hover,
      .value:focus {
        background-color: #21262C;
      }

      .value:focus,
      .value:active {
        background-color: #1A1F24;
        outline: none;
      }

      .value::before {
        content: "";
        position: absolute;
        top: 5px;
        left: -10px;
        width: 5px;
        height: 80%;
        background-color: #2F81F7;
        border-radius: 5px;
        opacity: 0;
      }

      .value:focus::before,
      .value:active::before {
        opacity: 1;
      }

      .value svg {
        width: 15px
      }
    }

    .map {
      margin-top: 40px;
      height: 90%;
      width: 99%;
      position: relative;
      border-radius: 14px;

      .bg {
        position: absolute;
        z-index: -1;
        inset: -4px;
        border-radius: 16px;
        overflow: hidden;
      }

      .uwu {
        filter: blur(8px);
        transition: filter 0.3s;
      }

      .bg::before {
        content: '';
        position: absolute;
        aspect-ratio: 1/1;
        top: 50%;
        left: 50%;
        min-width: 150%;
        min-height: 150%;
        background-image: conic-gradient(hsl(0, 100%, 50%),
            hsl(30, 100%, 50%),
            hsl(60, 100%, 50%),
            hsl(90, 100%, 50%),
            hsl(120, 100%, 50%),
            hsl(150, 100%, 50%),
            hsl(180, 100%, 50%),
            hsl(210, 100%, 50%),
            hsl(240, 100%, 60%),
            hsl(270, 100%, 50%),
            hsl(300, 100%, 50%),
            hsl(330, 100%, 50%),
            hsl(360, 100%, 50%));
        animation: speeen 4s linear infinite;
        transform-origin: 0% 0%;
        transform: rotate(0deg) translate(-50%, -50%);
      }
    }
  }

  .timebar {
    height: calc(30% - 35px);
    margin: 0 15px;
    margin-top: 23px;
    width: 96%;
    border-radius: 30px;
    background: #212121;
  }

  .colunm:nth-child(2) {
    flex: 5;
  }
}



.middle {
  grid-area: middle;
}

.right-middle {
  width: 100%;
  height: 100%;
  grid-area: right-middle;
  background: #07182E;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
}

.right-middle h2 {
  z-index: 1;
  color: white;
  // font-size: 2em;
}

.right-middle::before {
  content: '';
  position: absolute;
  width: 131%;
  background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
  height: 60%;
  animation: rotBGimg 3s linear infinite;
  transition: all 0.2s linear;
}

.right-middle::after {
  content: '';
  position: absolute;
  background: #07182E;
  ;
  inset: 5px;
  border-radius: 15px;
}


.sys-header {
  background-color: $var1;
  line-height: 60px;
  height: 60px;
  color: $var2;
  font-size: 22px;
  display: flex;
  align-items: center;
}

.header-inner {
  height: 100%;
  flex-grow: 3;
}

.change-showinner {
  height: 45px;
  font-size: 18px;
  background-color: $var3;
  line-height: 45px;
  text-align: center;
  border-radius: 5px;
  transition: all 0.3s;
}

.legend {
  position: absolute;
  height: 170px;
  width: 150px;
  top: 61%;
  left: 1%;
  z-index: 999;
}

@keyframes speeen {
  from {
    transform: rotate(0deg) translate(-50%, -50%);
  }

  to {
    transform: rotate(360deg) translate(-50%, -50%);
  }
}

@keyframes steam {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}
</style>