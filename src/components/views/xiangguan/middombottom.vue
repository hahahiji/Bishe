<template>
    <div class="banner" id="bottom">
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(() => {
    var myChart = echarts.init(document.getElementById('bottom'));
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
            data: ['spei1', 'spei2','spei3','spei4','spei5','spei6','spei7','spei8','spei9','spei10','spei11','spei12','spei13','spei14','spei15','spei16','spei17','spei18','spei19','spei20','spei21','spei22','spei23','spei24',]
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
                data: [0.04526166,0.05287356,0.0582354,0.05893932,0.06131796,0.064941,0.07117094,0.07787479,0.08246595,0.08492522,0.08688247,0.08684374,0.08454432,0.07965388,0.07337075,0.06814262,0.06490761,0.06288829,0.06226974,0.06354787,0.06523063,0.06724964,0.07055055,0.07270038],
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
            text: '相关性变化趋势',
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
.banner {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>