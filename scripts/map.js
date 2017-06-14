
"use strict";

var Moodieio = Moodieio || {};

(function(Google_Map){

        var runMap = function (i){

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
                
                console.log("closing");
                mapContainer[i].style.visibility = 'hidden';
                body.style.overflow = 'visible';

            }

            mapClose.addEventListener("click", closeMap);

        }

        Google_Map.Run = runMap;

})(window.Moodieio.Google_Map = window.Moodieio.Google_Map || {});

(function(){

    var onLoad = function(){

            var mapImg = document.querySelectorAll("[data-map-img]");
            if (mapImg.length==0){return;}            

            for (var k=0; k<mapImg.length; k++){
                
                (function(k){

                console.log(k);                    
                mapImg[k].addEventListener("click", function(){  

                    new  Moodieio.Google_Map.Run(k);

                 });   

                })(k);
            }
        
    }    
    window.addEventListener("load", onLoad );


})();