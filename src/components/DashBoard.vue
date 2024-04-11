<template>
  <div class="wrapper">
    <div class="top">
      <el-header class="sys-header">
      <div class="header-inner">中国植被生产力对干湿变化的响应可视化系统</div>
      <div class="change-showinner" @click="changescreen">切换展示模式</div>
    </el-header>
    </div>
    <div class="left-top">
      <LeftTop/>
    </div>
    <div class="left-bottom"><LeftBottom/></div>
    <div class="middle"><MapView/></div>
    <div class="bottom"><banner/></div>
    <div class="right-top"><RightTop/></div>
    <div class="right-middle">right-middle</div>
    <div class="right-bottom">right-bottom</div>
  </div>
</template>

<script setup lang="ts">
import LeftTop from './chartsView/LeftTop.vue';
import LeftBottom from './chartsView/LeftBottom.vue';
import RightTop from './chartsView/RightTop.vue';
import MapView from './arcgisMapView/Map.vue';
import banner from './banner/timeBanner.vue';

  const changescreen = () => {
    console.log(1);
  }
</script>

<style lang="scss" scoped>
$var1: #002133;
$var2: #ffffff;
$var3: #ff6356;
.wrapper {
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-rows: 60px repeat(4,calc((100vh - 60px)/4));
  grid-template-columns: 30% auto auto auto 30%;
  grid-template-areas: "top top top top top"
  "left-top middle middle middle right-top"
  "left-top middle middle middle right-middle"
  "left-bottom middle middle middle right-bottom"
  "left-bottom bottom bottom bottom right-bottom";

}
.top{
  grid-area: top;
  grid-row-start:1;
  grid-row-end:2;
}
.left-top{
  grid-area: left-top;
}
.left-bottom{
  grid-area: left-bottom;
}
.bottom{
  grid-area: bottom;
}
.middle{
  grid-area: middle;
}
.right-top{
  grid-area: right-top;
}
.right-middle{
  grid-area: right-middle;
}
.right-bottom{
  grid-area: right-bottom;
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
</style>