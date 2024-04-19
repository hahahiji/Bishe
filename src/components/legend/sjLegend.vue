<template>
    <div class="comlegend">
       <div class="legend-color">
        <div class="shape" id="one"></div>
        <div class="shape" id="two"></div>
        <div class="shape" id="three"></div>
        <div class="shape" id="four"></div>
       </div>
       <div class="legend-content">
        <div class="context">1</div>
        <div class="context">2</div>
        <div class="context">3</div>
        <div class="context">4</div>
       </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.comlegend{
    display: flex;
    color: white;
    height: 160px;
    width: 140px;
    padding: 5px;
}
.legend-color{
  width: 30%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
}
.legend-content{
  width: 70%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  .context{
    width: 100%;
    color: whitesmoke;
  }
}
#one{
    background-color: aqua;
}
#two{
    background-color: aqua;
}
#three{
    background-color: aqua;
}
#four{
    background-color: aqua;
}
.shape{
    width: 20px;
    height: 20px;
}
</style>