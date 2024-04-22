<template>
    <div id="tzlefttop">

    </div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(() => {
    var myChart = echarts.init(document.getElementById('tzlefttop'));
    myChart.setOption({

        series: [
            {
                data: [{ name: "干旱抑制光合作用", value: 60 }, { name: "过剩抑制光合作用", value: 40 }],
                type: 'pie',
                label: {
                    show: true,
                    position: 'outside',
                    color: 'white',
                },
                labelLine: {
                    show: true, // 隐藏扇区数据标签的引导线
                },
                radius: ['50%','80%']
            }
        ],
        legend: {
            orient: 'vertical',
            textStyle: {
                color: 'white'
            },
            left: 'left'
        },
        tooltip: {
            trigger: 'item'
        },
        label: {
            normal: {
                rich: {
                    a: {
                        color: 'red',
                        lineHeight: 22,
                        align: 'center'
                    },
                    // 这里的 per 指的是占比
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            }
        },
        title: {
            text: '变化趋势面积占比',
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
#tzlefttop {
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
