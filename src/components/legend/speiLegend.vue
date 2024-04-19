<template>
    <div class="comlegend">
       <div class="legend-color">
        <div class="gradient-linear"></div>
       </div>
       <div class="legend-content">
        <div class="context">1</div>
        <div class="context">2</div>
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
  align-items: center;
}
.legend-content{
  width: 70%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  .context{
    margin-left: 4px;
    width: 80%;
    height: 22%;
    color: whitesmoke;
  }
}
.gradient-linear{
    width: 80%;
    height: 90%;
    background: linear-gradient(to bottom, #7474bf, #348ac7);
}
</style>