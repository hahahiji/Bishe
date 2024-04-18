<template>
    <!-- <div ref="mapView" id="mapView"></div> -->
    <div class="legend custom-theme" ref="legendContainer"></div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { loadModules } from "esri-loader";
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
    const view = new MapView({
        container: "mapView",
        map: map,
        center: [105.923611, 25.540833],
        zoom: 3
    });
    const layer = new MapImageLayer({
        url: "http://localhost:6080/arcgis/rest/services/xiangguanxing/GPP与SPEI3变化显著性/MapServer",
    });
    map.add(layer)
    view.ui.components = [];
    const legendContainer = ref(null);
    const legendVM = new LegendViewModel({
        view: view,
    });
    const legendWidget = new Legend({
        view: view,
        viewModel: legendVM,
        layerInfos: [
            {
                layer: layer,
                title: null,
            }
        ],
    });
    nextTick(() => {
        legendWidget.container = document.querySelector(".legend");
    });
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
    // background-color: red;
    top: 61%;
    left: 1%;
    z-index: 999;

    // .esri-legend__service {
    //     h3 {
    //         display: none;
    //     }
    // }
    .esri-legend__layer-body {
        color: #fff;
        /* 设置文字颜色为深灰色 */
        font-size: 16px;
        /* 设置字体大小为16像素 */
    }

    .esri-legend__layer-caption {
        display: none;
    }

    .esri-legend__list {
        background-color: #f8f8f8;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .esri-legend__service-label {
        font-weight: bold;
        color: #333;
    }
}
</style>