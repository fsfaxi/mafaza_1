
"use strict";

var Moodieio = Moodieio || {};

(function(Menu){


        var expand_menu = function(i,menu_expand){

            console.log("expanding menu : "+i);    
            if(menu_expand[i].className.indexOf('exp')!==-1)
            {
                menu_expand[i].className = menu_expand[i].className.replace(' exp','');
            } else {
                menu_expand[i].className = menu_expand[i].className + " exp"
            }

        }

        Menu.Expand=expand_menu;


})(window.Moodieio.Menu = window.Moodieio.Menu || {});

(function(){

    var onLoad = function(){

            var menu_expand = document.querySelectorAll("[data-menu-expand]");
                    
            if (menu_expand.length==0){
                    return;
            }

            for (var k=0; k<menu_expand.length; k++){
                            
                (function(k){

                    console.log(k);                    
                    menu_expand[k].addEventListener("click", function(){
                            // expand_menu(k);
                            new Moodieio.Menu.Expand(k,menu_expand);
                    });   

                })(k);
            }
        
    }    
    window.addEventListener("load", onLoad );


})();

