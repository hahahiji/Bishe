<template>
    <div id="leftbottom">

    </div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(() => {
    var myChart = echarts.init(document.getElementById('leftbottom'));
    myChart.setOption({
        xAxis: {
            type: 'value',
            splitLine: {
                show: false // 去除X轴网格线
            },
            inverse: true,
            axisLabel: {
                color: 'white' // 刻度标签的文字颜色
            },
        },
        yAxis: {
            splitLine: {
                show: false // 去除X轴网格线
            },
            data: ['spei1', 'spei2','spei3','spei4','spei5','spei6','spei7','spei8','spei9','spei10','spei11','spei12','spei13','spei14','spei15','spei16','spei17','spei18','spei19','spei20','spei21','spei22','spei23','spei24',],
            axisLabel: {
                color: 'white' // 刻度标签的文字颜色
            },
            type: 'category',
            inverse: true
        },
        series: [
            {
                data: [-0.057947624, -0.046702016, -0.0690655, -0.056718096, -0.06018256, -0.033153873, -0.05978229, -0.06837557, -0.056482412, -0.04761937, -0.029055256, -0.018770296, -0.016992686],
                type: 'bar'
            }
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
            formatter: '{b}: {c}',
        },
        title: {
            text: '同一年不同时间尺度的数值',
            left: 'center',
            textStyle: {
                color: '#fff', // 标题颜色
                fontSize: 18, // 标题字体大小
                fontWeight: 'bold', // 标题字体粗细
                fontFamily: 'Arial',// 标题字体类型
            }
        }

    })
})
</script>
<style scoped>
#leftbottom {
    height: 100%;
    width: 100%;
}
</style>
