require([
      "esri/Map",
      "esri/layers/FeatureLayer",
      "esri/views/MapView",
      "dojo/domReady!"
    ], function(
      Map,
      FeatureLayer,
      MapView
    ) {

      // Create the map
      var map = new Map({
        basemap: "gray"
      });

      // Create the MapView
      var view = new MapView({
        container: "viewDiv",
        map: map,
        center:[-90.23, 38.63],
        zoom: 11
      });

      /*************************************************************
       * The PopupTemplate content is the text that appears inside the
       * popup. {fieldName} can be used to reference the value of an
       * attribute of the selected feature. HTML elements can be used
       * to provide structure and styles within the content. The
       * fieldInfos property is an array of objects (each object representing
       * a field) that is use to format number fields and customize field
       * aliases in the popup and legend.
       **************************************************************/

      var template = { // autocasts as new PopupTemplate()
        title: "Neighborhood: {NHD_NAME}",
        content: [{
          
          // It is also possible to set the fieldInfos outside of the content
          // directly in the popupTemplate. If no fieldInfos is specifically set
          // in the content, it defaults to whatever may be set within the popupTemplate.
          type: "fields",
          fieldInfos: [{
            fieldName: "NHD_NUM",
            label: "Neighborhood #: ",
            visible: true
          }, {
            fieldName: "Shape__Area",
            label: "Area: ",
            visible: true,
            format: {
              digitSeparator: true,
              places: 0
            }
          }
         ]
        }]
      };

     var symbol = {
  type: "simple-fill",  // autocasts as new SimpleFillSymbol()
  color: [ 51,51, 204, 0.9 ],
  style: "solid",
  outline: {  // autocasts as new SimpleLineSymbol()
    color: "white",
    width: 1
  }
};
  
  /*
  var symbol = {
      type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
      url: "https://graphicriver.img.customer.envatousercontent.com/files/224145068/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=60d4fe57e0a4ead05318f4b9ba91192a",
      width: "48px",
      height: "48px"
};

*/ 
  
  var renderer = {
      type: "simple",  // autocasts as new SimpleRenderer()
      symbol: symbol
    };
  
      // Reference the popupTemplate instance in the
      // popupTemplate property of FeatureLayer
      var featureLayer = new FeatureLayer({
        url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/ArcGIS/rest/services/STL_Neighborhood/FeatureServer/0",
        outFields: ["*"],
        popupTemplate: template,
        renderer:renderer
      });
  
      map.add(featureLayer);
  

   /*
      featureLayer.renderer = {
      type: "simple",  // autocasts as new SimpleRenderer()
      symbol: {
        type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
        size: 6,
        color: "red",
        outline: {  // autocasts as new SimpleLineSymbol()
          width: 0.5,
          color: "white"
        }
      }
    };*/
    });
