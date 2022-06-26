var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Modelodeterreno_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Modelo de terreno",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Modelodeterreno_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11657895.924164, 2749125.785147, -11657760.723645, 2749315.800166]
                            })
                        });
var lyr_Modelodesuperficie_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Modelo de superficie",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Modelodesuperficie_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11657895.924164, 2749125.785147, -11657760.723645, 2749315.800166]
                            })
                        });
var lyr_Ortomosaico_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ortomosaico",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Ortomosaico_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11657896.038864, 2749125.755654, -11657760.708017, 2749315.842268]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Modelodeterreno_1.setVisible(true);lyr_Modelodesuperficie_2.setVisible(true);lyr_Ortomosaico_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Modelodeterreno_1,lyr_Modelodesuperficie_2,lyr_Ortomosaico_3];
