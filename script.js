    require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
	  "esri/widgets/Home",
      "esri/widgets/Legend",
      "esri/widgets/LayerList",
      "esri/widgets/ScaleBar",
      "esri/widgets/Daylight",
      "esri/widgets/Expand",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home, Legend, LayerList, ScaleBar,Daylight,Expand) {
    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      var camera = new Camera({
        position: [
           -71.060217,// lon
          42.382655, // lat
          2500// elevation in meters
        ],
        tilt:45,
        heading: 180
      })
      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        camera: camera
    });
	
	var homeBtn = new Home({
        view: view
      });
      
     const daylight = new Daylight({
      view: view
    });
    view.ui.add(daylight, "top-right");
      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
      
      view.when(function() {
	
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
        var featureLayer = scene.layers.getItemAt(1);

        
        layerList = new LayerList({
  container: document.createElement("div"),
  view: view
});
layerListExpand = new Expand({
  expandIconClass: "esri-icon-layer-list",  // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
  // expandTooltip: "Expand LayerList", // optional, defaults to "Expand" for English locale
  view: view,
  content: layerList
});
view.ui.add(layerListExpand, "bottom-right");
        
   });
      
      


    });
