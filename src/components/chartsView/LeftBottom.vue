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
        lineStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, // 渐变的方向，从上到下
                [
                    { offset: 0, color: '#1FA2FF' }, // 开始颜色，红色
                    { offset: 1, color: '#A6FFCB' }  // 结束颜色，蓝色
                ]
            ),
            width: 3,          // 线条宽度
            type: 'solid'
        },
        xAxis: {
            type: 'category',
            splitLine: {
                show: false // 去除X轴网格线
            },
            axisLabel: {
                color: 'white' // 刻度标签的文字颜色
            },
            data: ['1982', '1985', '1988', '1991', '1994', '1997', '2000', '2003', '2006', '2009', '2012', '2015', '2018']
        },
        yAxis: {
            splitLine: {
                show: false // 去除X轴网格线
            },
            type: 'value',
            axisLabel: {
                formatter: '{value}°C',
                color: 'white' // 刻度标签的文字颜色
            }
        },
        series: [
            {
                data: [6.3725801855153456, 5.928487796232002, 6.471992673916291, 6.3035076927354304, 6.701291100615488, 6.539489346247815, 6.455262581714679, 6.734784909240666, 7.203687456340641, 7.011297738575584, 6.305822550992392, 7.189130166574569, 7.308991916285244],
                name: '折线图数据',// 可选，为折线图系列添加名称，方便在tooltip中区分
                type: 'line',
                smooth: true,
                itemStyle: {
                    color: "#8ec6ad"
                },
                symbol: "circle",
            }
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                label: {
                    show: true,
                }
            },
            formatter: '{b}: {c}',
        },
        title: {
            text: '温度的值',
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