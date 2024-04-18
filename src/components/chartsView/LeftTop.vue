<template>
    <div id="lefttop">
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(() => {
    var myChart = echarts.init(document.getElementById('lefttop'));
    myChart.setOption({
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
            axisLabel: {
                color: 'white' // 刻度标签的文字颜色
            },
            type: 'value',
            min: -0.1,
            max: 0,
            inverse: true
        },
        series: [
            {
                data: [-0.057947624, -0.046702016, -0.0690655, -0.056718096, -0.06018256, -0.033153873, -0.05978229, -0.06837557, -0.056482412, -0.04761937, -0.029055256, -0.018770296, -0.016992686],
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
            text: 'GPP每年的数值',
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
#lefttop {
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