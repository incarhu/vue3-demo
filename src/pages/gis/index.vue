<template>
	<div class="detail-wrap">
		<div id="map" class="map">111</div>
		<div id="cesiumContainer"></div>
	</div>
</template>

<script>
import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import OLCesium from 'olcs/OLCesium.js';
export default {
	data () {
		
	},
	mounted() {
		this.initMap()
		var viewer = new Cesium.Viewer("cesiumContainer")
		const ol3d = new OLCesium({map: ol2dMap}); // ol2dMap 是openlayers绑定的地图对象
		ol3d.setEnabled(true);

		var ol3dLayers = ol3d.getCesiumScene().imageryLayers;
        // eslint-disable-next-line no-undef
        ol3dLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
          url: 'http://**************/arcgis/rest/services/**/******/MapServer'
        }))
	},
	methods: {
		initMap() {
			new Map({
				layers: [
					new TileLayer({
						source: new OSM()
					})
				],
				target: "map",
				view: new View({
					projection: "EPSG:4326",    //使用这个坐标系
					center: [114.064839, 22.548857],  //深圳
					zoom: 15
				//   center: [0, 0],
				//   zoom: 2
				})
	      	})
		}
	}
}
</script>

<style scoped lang="scss">
.map {
	width: 100%;
	height: 400px;
}
</style>