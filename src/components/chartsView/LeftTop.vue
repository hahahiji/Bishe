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
                data: [120, 200, 150, 80, 70, 110, 130, 70, 110, 130],
                type: 'bar'
            }
        ],
        title: {
            text: 'GPP每年的数值',
            left: 'center',
            textStyle: {
                color: '#333', // 标题颜色
                fontSize: 18, // 标题字体大小
                fontWeight: 'bold', // 标题字体粗细
                fontFamily: 'Arial' ,// 标题字体类型
            }
        }

    })
})
</script>

<style scoped>
#lefttop {
    height: 100%;
    background-color: aquamarine
}
</style>