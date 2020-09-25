
      
        var wwd = new WorldWind.WorldWindow("canvasOne");

      
        var layers = [
                  {layer: new WorldWind.BMNGLayer(), enabled: true},
            {layer: new WorldWind.BMNGLandsatLayer(), enabled: false},
            {layer: new WorldWind.BingAerialLayer(null), enabled: false},
            {layer: new WorldWind.BingAerialWithLabelsLayer(null), enabled: true},
            {layer: new WorldWind.BingRoadsLayer(null), enabled: false},
            
            {layer: new WorldWind.CompassLayer(), enabled: true},
            {layer: new WorldWind.CoordinatesDisplayLayer(wwd), enabled: true},
            {layer: new WorldWind.ViewControlsLayer(wwd), enabled: true}
        ];

        for (var l = 0; l < layers.length; l++) {
            layers[l].layer.enabled = layers[l].enabled;
            wwd.addLayer(layers[l].layer);
        }
        
     
        function getdata(){
           
                    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
        // Named layer displaying Average Temperature data
        var item = document.getElementById('mySelect').value;
        var layerName = item;
        
        if(item=="MODAL2_M_AER_OD"){
            var img = document.createElement("img");
            img.src = "";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="MODAL2_M_AER_RA"){
            var img = document.createElement("img");
            img.src = "";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="MOP_CO_M"){
            var img = document.createElement("img");
            img.src = "";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="MODAL2_M_CLD_FR"){
            var img = document.createElement("img");
            img.src = "";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="MODAL2_M_CLD_OT"){
            var img = document.createElement("img");
            img.src = "";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="MODAL2_M_CLD_RD"){
            var img = document.createElement("img");
            img.src = "";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="MODAL2_M_CLD_WP"){
            var img = document.createElement("img");
            img.src = "";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="AURA_NO2_M"){
            var img = document.createElement("img");
            img.src = "a9.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="AURA_OZONE_M"){
            var img = document.createElement("img");
            img.src = "a10.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="TRMM_3B43M"){
            var img = document.createElement("img");
            img.src = "a11.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="MODAL2_M_SKY_WV"){
            var img = document.createElement("img");
            img.src = "a14.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

       

        // Called asynchronously to parse and create the WMS layer
        var createLayer = function (xmlDom) {
            // Create a WmsCapabilities object from the XML DOM
            var wms = new WorldWind.WmsCapabilities(xmlDom);
            // Retrieve a WmsLayerCapabilities object by the desired layer name
            var wmsLayerCapabilities = wms.getNamedLayer(layerName);
            // Form a configuration object from the WmsLayerCapability object
            var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
            // Modify the configuration objects title property to a more user friendly title
            wmsConfig.title = "Average Surface Temp";
            // Create the WMS Layer from the configuration object
            var wmsLayer = new WorldWind.WmsLayer(wmsConfig);

            // Add the layers to WorldWind and update the layer manager
            wwd.addLayer(wmsLayer);
            layerManager.synchronizeLayerList();
        };

        // Called if an error occurs during WMS Capabilities document retrieval
        var logError = function (jqXhr, text, exception) {
            console.log("There was a failure retrieving the capabilities document: " + text + " exception: " + exception);
        };

        $.get(serviceAddress).done(createLayer).fail(logError);

        // Create a layer manager for controlling layer visibility.
        var layerManager = new LayerManager(wwd);
        }
        function screenshot()
        {
            html2canvas(document.querySelector("body")).then(canvas => {
                document.body.appendChild(canvas)
        });
        }
