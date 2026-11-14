var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HoseaSites_1 = new ol.format.GeoJSON();
var features_HoseaSites_1 = format_HoseaSites_1.readFeatures(json_HoseaSites_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HoseaSites_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HoseaSites_1.addFeatures(features_HoseaSites_1);
var lyr_HoseaSites_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HoseaSites_1, 
                style: style_HoseaSites_1,
                popuplayertitle: 'Hosea Sites',
                interactive: true,
    title: 'Hosea Sites<br />\
    <img src="styles/legend/HoseaSites_1_0.png" /> Confirmed site / 확인된 장소<br />\
    <img src="styles/legend/HoseaSites_1_1.png" /> Proposed site / 추정 장소<br />' });

var json_NorthernKingdom_2 = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {"name": "Northern Kingdom of Israel (approximate boundary)"},
        "geometry": {
            "type": "Polygon",
            "coordinates": [[
                [35.56, 33.30], [35.68, 33.30], [35.76, 33.18],
                [35.84, 33.12], [35.92, 33.03], [36.02, 33.00],
                [36.10, 32.95], [36.13, 32.80], [36.15, 32.65],
                [36.20, 32.45], [36.22, 32.25], [36.16, 32.00],
                [36.10, 31.80], [36.00, 31.65], [35.94, 31.50],
                [35.85, 31.38], [35.74, 31.32], [35.65, 31.44],
                [35.58, 31.55], [35.55, 31.68], [35.48, 31.76],
                [35.42, 31.82], [35.36, 31.86], [35.26, 31.86],
                [35.18, 31.88], [35.10, 31.94], [35.02, 31.98],
                [34.90, 32.00], [34.86, 32.05], [34.88, 32.18],
                [34.90, 32.32], [34.93, 32.47], [34.95, 32.60],
                [35.00, 32.72], [35.04, 32.84], [35.07, 32.94],
                [35.14, 33.02], [35.26, 33.09], [35.34, 33.16],
                [35.46, 33.22], [35.56, 33.30]
            ]]
        }
    }]
};
var features_NorthernKingdom_2 = new ol.format.GeoJSON().readFeatures(
    json_NorthernKingdom_2,
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'}
);
var lyr_NorthernKingdom_2 = new ol.layer.Vector({
    source: new ol.source.Vector({features: features_NorthernKingdom_2}),
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(90,98,108,1.0)', width: 3})
    }),
    interactive: false,
    title: 'Northern Kingdom of Israel (approximate boundary) / 북이스라엘 왕국(경계 추정)'
});

lyr_OpenStreetMap_0.setVisible(true);lyr_HoseaSites_1.setVisible(true);lyr_NorthernKingdom_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NorthernKingdom_2,lyr_HoseaSites_1];
lyr_HoseaSites_1.set('fieldAliases', {'name': 'Site / 장소', 'description': 'Description / 설명', 'proposed_location': 'proposed_location', 'photo': 'Photo / 사진', 'photo_status': 'photo_status', 'photo_credit': 'Photo credit / 사진 출처', 'label_text': 'label_text', });
lyr_HoseaSites_1.set('fieldImages', {'name': '', 'description': '', 'proposed_location': '', 'photo': 'ExternalResource', 'photo_status': '', 'photo_credit': '', 'label_text': '', });
lyr_HoseaSites_1.set('fieldLabels', {'name': 'header label - always visible', 'description': 'inline label - always visible', 'proposed_location': 'hidden field', 'photo': 'inline label - visible with data', 'photo_status': 'hidden field', 'photo_credit': 'inline label - visible with data', 'label_text': 'hidden field', });
lyr_HoseaSites_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
/* Charted Territory (Esri) vector basemap - added 2026-11-09.
   Public Esri-owned style item, loaded live and anonymously:
   no API key, no ArcGIS item created, no credit-metered storage.
   Use is covered by an ArcGIS Online subscription with attribution
   (Esri AGOL FAQ, tou_summary.pdf, updated 2025-04-21). */
var lyr_ChartedTerritory_0 = new ol.layer.VectorTile({
    'title': 'Charted Territory (Esri)',
    'opacity': 1.000000,
    declutter: true
});
fetch('https://www.arcgis.com/sharing/rest/content/items/1c365daf37a744fbad748b67aa69dac8/resources/styles/root.json')
    .then(function (r) { return r.json(); })
    .then(function (style) {
        Object.keys(style.sources || {}).forEach(function (k) {
            var src = style.sources[k];
            delete src.url; // Esri's TileJSON serves relative tile URLs; use the absolute template instead
            src.tiles = ['https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/{z}/{y}/{x}.pbf'];
        });
        return olms.applyStyle(lyr_ChartedTerritory_0, style, 'esri');
    })
    .then(function () {
        var s = lyr_ChartedTerritory_0.getSource();
        if (s && s.setAttributions) {
            s.setAttributions('Powered by Esri &middot; &copy; Esri and its data providers');
        }
    });
lyr_ChartedTerritory_0.setVisible(true);
lyr_OpenStreetMap_0.setVisible(false);
layersList.unshift(lyr_ChartedTerritory_0);

/* Labels-only layer (added 2026-11-10): shares the same source; declutters
   label text only, so point markers stay visible at every zoom while
   overlapping labels are dropped. Not in layersList; added to the map in
   resources/qgis2web.js after map creation, and excluded from popups. */
var lyr_HoseaSites_1_labels = new ol.layer.Vector({
                declutter: true,
                source: jsonSource_HoseaSites_1,
                style: style_HoseaSites_1_labels,
                interactive: false
});
