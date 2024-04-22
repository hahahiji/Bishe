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
                data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,1,1,1,1,1,1,1,1],
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
                fontSize: 18, // 标题字体大小
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
