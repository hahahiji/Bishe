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
            data: ['1982', '1985', '1988', '1991', '1994', '1997', '2000', '2003', '2006', '2009', '2012', '2015', '2018']
        },
        yAxis: {
            splitLine: {
                show: false // 去除X轴网格线
            },
            axisLabel: {
                color: 'white' // 刻度标签的文字颜色
            },
            type: 'value',
            min: -1,
            max: 1,
            // inverse: true
        },
        series: [
            {
                data: [0.03843199, 0.17686396, 0.19259557, 0.06454288, -0.22232752, -0.39846683, -0.43182876, -0.59013583, -0.59013583, -0.57030891, -0.15954051, -0.20090367, -0.16036813],
                type: 'bar',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, // 渐变的方向和位置
                        [
                            { offset: 0, color: '#00ff00' }, // 开始颜色，位置（0%）
                            { offset: 1, color: '#ffff00' }  // 结束颜色，位置（100%）
                        ]
                    )
                },
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
            text: 'spei3个别年份的数值',
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
