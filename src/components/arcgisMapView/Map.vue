<template>
    <div ref="mapView" id="mapView"></div>
    <div class="legend">
        <slot></slot>
    </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import { loadModules } from "esri-loader";
import { useStore } from 'vuex'
import bus from 'vue3-eventbus'
const store = useStore()
onMounted(async () => {
    const [Map, MapView, MapImageLayer, Basemap, TileLayer, Legend, LegendViewModel] = await loadModules([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/MapImageLayer",
        "esri/Basemap",
        "esri/layers/TileLayer",
        "esri/widgets/Legend",
        "esri/widgets/Legend/LegendViewModel"
    ]);
    const map = new Map({
        basemap: new Basemap({
            baseLayers: [
                new TileLayer({
                    url: "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",
                }),
            ],
        })
    });
    store.commit('setmap', map)
    const view = new MapView({
        container: "mapView",
        map: map,
        center: [105.923611, 25.540833],
        zoom: 3
    });
    // const layer = new MapImageLayer({
    //     url: "http://localhost:6080/arcgis/rest/services/GPP轮播文件/1982/MapServer",
    // });
    // map.add(layer)
    console.log('diyige', map);
    const gpplayers = []
    for (let i = 0; i < 13; i++) {
        let year = i * 3 + 1982;
        const layer = new MapImageLayer({
            url: `http://localhost:6080/arcgis/rest/services/GPP轮播文件/${year}/MapServer`,
        });
        gpplayers.push(layer);
    }
    const speiyeardata = []
    for (let i = 0; i < 13; i++) {
        let year = i * 3 + 1982;
        const layer = new MapImageLayer({
            url: `http://localhost:6080/arcgis/rest/services/SPEI隔年轮播文件/${year}/MapServer`,
        });
        speiyeardata.push(layer);
    }
    const speiaccumlativedata = []
    for (let i = 1; i <= 24; i++) {
        const layer = new MapImageLayer({
            url: `http://localhost:6080/arcgis/rest/services/SPEI累计轮播文件/spei${i}/MapServer`,
        });
        speiaccumlativedata.push(layer);
    }
    bus.emit('pushlayerandmap', { map: map, layer: gpplayers, speiyearlayer: speiyeardata, accumlatelayer: speiaccumlativedata })
    bus.on('changeRoute', (e) => {
        if(e.currentRoute === 'xiangguan'){
            const layer = new MapImageLayer({
            url: 'http://localhost:6080/arcgis/rest/services/xiangguanxing/GPP与SPEI3相关显著性/MapServer', //相关性
             });
            map.add(layer)
        }else if(e.currentRoute === 'tezheng'){
            const layer = new MapImageLayer({
            url: 'http://localhost:6080/arcgis/rest/services/xiangguanxing/GPP与SPEI3变化显著性/MapServer', // 
             });
            map.add(layer)
        }
        else if(e.currentRoute === 'shijian'){
            const layer = new MapImageLayer({
            url: 'http://localhost:6080/arcgis/rest/services/xiangguanxing/植被生产力对干湿变化的响应时间/MapServer', // 
             });
            map.add(layer)
        }
        else if(e.currentRoute === 'yingxiang'){
            const layer = new MapImageLayer({
            url: 'http://localhost:6080/arcgis/rest/services/xiangguanxing/植被别对水分亏缺剩显著响应的最小时间尺度/MapServer', // 
             });
            map.add(layer)
        }
    })
    view.ui.components = [];
})
</script>

<style lang="scss" scoped>
#mapView {
    width: 100%;
    height: 100%;
}

.legend {
    position: absolute;
    height: 170px;
    width: 150px;
    top: 61%;
    left: 1%;
    z-index: 999;
}
</style>