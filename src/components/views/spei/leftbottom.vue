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
        grid:{
            left: '0.1%', // 这里设置图表的左侧留白，从而使得 Y 轴视觉上向右移动
            containLabel: true
        },
        xAxis: {
            type: 'value',
            splitLine: {
                show: false // 去除X轴网格线
            },
            // inverse: true,
            axisLabel: {
                color: 'white' // 刻度标签的文字颜色
            },

        },
        yAxis: {
            splitLine: {
                show: false // 去除X轴网格线
            },
            data: ['spei1', 'spei2', 'spei3', 'spei4', 'spei5', 'spei6', 'spei7', 'spei8', 'spei9', 'spei10', 'spei11', 'spei12', 'spei13', 'spei14', 'spei15', 'spei16', 'spei17', 'spei18', 'spei19', 'spei20', 'spei21', 'spei22', 'spei23', 'spei24',],
            axisLabel: {
                color: 'white' // 刻度标签的文字颜色
            },
            type: 'category',
            // inverse: true
        },
        series: [
            {
                data: [-0.00681861, 0.03435267, 0.03843199, 0.00498708, -0.01872055, -0.01721243, -0.0000898, 0.02878342, 0.06255206, 0.08833314, 0.10623884, 0.11932442, 0.1450228, 0.13875863, 0.12828246, 0.10468441, 0.07872334, 0.05323807, 0.04432105, 0.03563006, 0.0503218, 0.05465915, 0.05528439, 0.05745104],
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
