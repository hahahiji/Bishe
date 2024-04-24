<template>
    <div id="tzleftbottom">

    </div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(() => {
    var myChart = echarts.init(document.getElementById('tzleftbottom'));
    myChart.setOption({
        xAxis: {
            type: 'value',
            splitLine: {
                show: false // 去除X轴网格线
            },
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
        },
        series: [
            {
                data: [0.04526166,0.05287356,0.0582354,0.05893932,0.06131796,0.064941,0.07117094,0.07787479,0.08246595,0.08492522,0.08688247,0.08684374,0.08454432,0.07965388,0.07337075,0.06814262,0.06490761,0.06288829,0.06226974,0.06354787,0.06523063,0.06724964,0.07055055,0.07270038],
                type: 'bar',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, // 渐变的方向和位置
                        [
                            { offset: 0, color: '#90ee90' }, // 开始颜色，位置（0%）
                            { offset: 1, color: '#006400' }  // 结束颜色，位置（100%）
                        ]
                    )
                }
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
            text: '1982—2018年月GPP异常与SPEI的相关性',
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
#tzleftbottom {
    height: 100%;
    width: 100%;
}
</style>
