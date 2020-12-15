var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_titikacuancirebon_1 = new ol.format.GeoJSON();
var features_titikacuancirebon_1 = format_titikacuancirebon_1.readFeatures(json_titikacuancirebon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titikacuancirebon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikacuancirebon_1.addFeatures(features_titikacuancirebon_1);
var lyr_titikacuancirebon_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_titikacuancirebon_1, 
                style: style_titikacuancirebon_1,
                interactive: true,
                title: '<img src="styles/legend/titikacuancirebon_1.png" /> titik acuan cirebon'
            });
var format_restaurant_2 = new ol.format.GeoJSON();
var features_restaurant_2 = format_restaurant_2.readFeatures(json_restaurant_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurant_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurant_2.addFeatures(features_restaurant_2);
var lyr_restaurant_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_restaurant_2, 
                style: style_restaurant_2,
                interactive: true,
                title: '<img src="styles/legend/restaurant_2.png" /> restaurant'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_titikacuancirebon_1.setVisible(true);lyr_restaurant_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_titikacuancirebon_1,lyr_restaurant_2];
lyr_titikacuancirebon_1.set('fieldAliases', {'id': 'id', });
lyr_restaurant_2.set('fieldAliases', {'id': 'id', 'origin_id': 'origin_id', 'title': 'title', 'label': 'label', 'distance': 'distance', 'categories': 'categories', });
lyr_titikacuancirebon_1.set('fieldImages', {'id': '', });
lyr_restaurant_2.set('fieldImages', {'id': '', 'origin_id': '', 'title': '', 'label': '', 'distance': '', 'categories': '', });
lyr_titikacuancirebon_1.set('fieldLabels', {'id': 'no label', });
lyr_restaurant_2.set('fieldLabels', {'id': 'no label', 'origin_id': 'no label', 'title': 'no label', 'label': 'no label', 'distance': 'no label', 'categories': 'no label', });
lyr_restaurant_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});