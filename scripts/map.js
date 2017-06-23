
"use strict";

var Moodieio = Moodieio || {};

(function(Google_Map){

        var lazyRunMap = function (i){

            var mapContainer = document.querySelectorAll("[data-map-container]");
            if (mapContainer.length==0){return;}

            console.log(i);
            var mapc = mapContainer[i].querySelector("[data-map]");
            var mapClose = mapContainer[i].querySelector("[data-map-close]");
            var body = document.body;
                
            mapContainer[i].style.visibility = 'visible';
            window.scrollTo(0,0);
            body.style.overflow = 'hidden';
            
            var myCenter = new google.maps.LatLng(mapc.dataset.mapLat,mapc.dataset.mapLng);
            var mapOptions = {center: myCenter, zoom: 15};
            var map = new google.maps.Map(mapc, mapOptions);
            var marker = new google.maps.Marker({position:myCenter});
            marker.setMap(map);

            var closeMap = function (){

                mapContainer[i].style.visibility = 'hidden';
                body.style.overflow = 'visible';

            }

            mapClose.addEventListener("click", closeMap);

        }

        var runMap = function(mapc){

            var myCenter = new google.maps.LatLng(mapc.dataset.mapLat,mapc.dataset.mapLng);
            var mapOptions = {center: myCenter, zoom: 18};
            var map = new google.maps.Map(mapc, mapOptions);
            var marker = new google.maps.Marker({position:myCenter});
            marker.setMap(map);
        }

        Google_Map.lazyRun = lazyRunMap;
        Google_Map.Run = runMap;

})(window.Moodieio.Google_Map = window.Moodieio.Google_Map || {});

(function(){

    var onLoad = function(){

            // Get lazy run map containers
            var mapImg = document.querySelectorAll("[data-map-img]");
            // Get normal map containers
            var mapc = document.querySelectorAll("[data-map]");
            
            if (mapImg.length==0 && mapc.length==0){return;}            

            // Add event listener for map lazy running 
            for (var k=0; k<mapImg.length; k++){
                
                (function(k){
                    
                    mapImg[k].addEventListener("click", function(){  

                        new  Moodieio.Google_Map.lazyRun(k);

                    });   

                })(k);
            }
            
            // normal map run 
            for (var k=0; k<mapc.length; k++){
                
                (function(k){ new  Moodieio.Google_Map.Run(mapc[k]); })(k);

            }
        
    }    
    window.addEventListener("load", onLoad );


})();