
(function(){

    var runMap = function (){

        var mapContainer = document.querySelector("[data-map-container]");
        var map = mapContainer.querySelector("[data-map]");
        var mapClose = mapContainer.querySelector("[data-map-close]");
        var body = document.body;
        
        mapContainer.style.visibility = 'visible';
        window.scrollTo(0,0);
        body.style.overflow = 'hidden';
        
        var myCenter = new google.maps.LatLng(map.dataset.mapLat,map.dataset.mapLng);
        var mapCanvas = document.getElementById("mfz-contact-map-innercontainer");
        var mapOptions = {center: myCenter, zoom: 15};
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);

        var closeMap = function (){
            
            mapContainer.style.visibility = 'hidden';
            body.style.overflow = 'visible';

         }

         mapClose.addEventListener("click", closeMap);

    }

     window.addEventListener("load", function(){
         var mapImg = document.querySelector("[data-map-img]");
         mapImg.addEventListener("click", runMap);
     });
    

})();