import { loadModules } from "esri-loader";

async function initializeMap() {
  const [Map, MapView, MapImageLayer, Basemap, TileLayer] = await loadModules([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/MapImageLayer",
    "esri/Basemap",
    "esri/layers/TileLayer"
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
    center: [105.923611, 37.540833],
    zoom: 4
  });

  // 如果确实需要导出view和map，可以考虑使用事件或状态管理库传递给需要使用它们的组件
  // 通常情况下，仅导出类（如Map、MapView等）即可，具体实例应在各自组件内部创建和管理
  export { view, map, MapView, MapImageLayer, Basemap, TileLayer };

  // 或者，仅导出类（推荐）
//   export { Map, MapView, MapImageLayer, Basemap, TileLayer };
}

// 调用初始化函数（如在main.ts中）
initializeMap();