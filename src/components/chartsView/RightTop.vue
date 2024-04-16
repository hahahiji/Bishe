<template>
    <div id="righttop">
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(() => {
    var myChart = echarts.init(document.getElementById('righttop'));
    myChart.setOption({
        xAxis: {
            type: 'category',
            splitLine: {
                show: false // 去除X轴网格线
            },
            data: ['1982', '1985', '1988', '1991', '1994', '1997', '2000', '2003', '2006', '2009', '2012', '2015', '2018']
        },
        yAxis: {
            splitLine: {
                show: false // 去除X轴网格线
            },
            type: 'value',
        },
        series: [
            {
                data: [47.16337800923754, 48.43378113498691, 46.3759466912723, 46.39521276226024, 48.973649209874225, 46.26661340659417, 47.28319605614811, 47.759407310097, 45.43705076475556, 44.24727435279889, 51.12187737845756, 49.465811117019246, 48.65457767282155],
                type: 'bar',
                name: '柱状图数据',
            },
            {
                data: [47.16337800923754, 48.43378113498691, 46.3759466912723, 46.39521276226024, 48.973649209874225, 46.26661340659417, 47.28319605614811, 47.759407310097, 45.43705076475556, 44.24727435279889, 51.12187737845756, 49.465811117019246, 48.65457767282155],
                name: '折线图数据',// 可选，为折线图系列添加名称，方便在tooltip中区分
                type: 'line',
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
            text: '降水的值',
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
#righttop {
    height: 100%;
    width: 100%;
    position: absolute;
    right: -2%;
    top: 5%;
}
</style>