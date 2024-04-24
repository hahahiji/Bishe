<template>
    <div id="speilefttop">

    </div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(() => {
    var myChart = echarts.init(document.getElementById('speilefttop'));
    myChart.setOption({
        xAxis: {
            type: 'category',
            axisLabel: {
                color: 'white' // 刻度标签的文字颜色
            },
            splitLine: {
                show: false // 去除X轴网格线
            },
            data: ['东北', '华北', '华东', '华南', '华中', '西北', '西南']
        },
        yAxis: [{
            name: "相关系数",
            nameTextStyle: {
                color: '#fff',
                fontSize: 10,
                fontWeight: 'bold'
            },
            splitLine: {
                show: false // 去除X轴网格线
            },
            axisLabel: {
                color: 'white' // 刻度标签的文字颜色
            },
            type: 'value',
        },
        {
            name: "面积占比",
            nameTextStyle: {
                color: '#fff',
                fontSize: 10,
                fontWeight: 'bold',
            },
            splitLine: {
                show: false // 去除X轴网格线
            },
            axisLabel: {
                color: 'white' // 刻度标签的文字颜色
            },
            type: 'value',
            position: 'right',
        },
        ],
        series: [
            {
                name: "显著正相关",
                data: [1, 2, 3, 4, 5, 6, 7],
                type: 'bar',
                yAxisIndex: 1,
                itemStyle: {
                    color: "yellow"
                },
            },
            {
                name: '显著负相关',
                type: 'bar',
                yAxisIndex: 1,
                data: [5, 15, 25, 35, 45, 55, 65],
                itemStyle: {
                    color: "red"
                },
            },
            {
                name: '相关系数',
                type: 'line',
                data: [2, 5, 26, 8, 45, 43, 35],
                symbol: "triangle",
            },
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
            formatter: '{b}: {c}',
        },
        legend: {
            data: ['显著正相关', '显著负相关', '相关系数'],
            show: true,
            top: "15%",
            textStyle: {
                color: 'white'
            },
        },
        title: {
            text: '不同地理分区的相关性',
            left: 'center',
            textStyle: {
                color: '#fff', // 标题颜色
                fontSize: 16, // 标题字体大小
                fontWeight: 'bold', // 标题字体粗细
                fontFamily: 'Arial',// 标题字体类型
            }
        }

    })
})
</script>
<style scoped>
#speilefttop {
    --color: #0c1727;
    background: var(--color);
    color: var(--color);
    display: flex;
    width: 100%;
    height: 100%;
    overflow: visible;
    border-radius: .7rem;
}
</style>
