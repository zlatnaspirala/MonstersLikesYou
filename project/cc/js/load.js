var App = {

DRAW_ID : "N1",
INTEVAL : 1

};

function DETECTBROWSER(){
var HREFF,HREFTXT;
var NAV = navigator.userAgent;var gecko,navIpad,operatablet,navIphone,navFirefox,navChrome,navOpera,navSafari,navandroid,mobile,navMozilla;  
gecko=NAV.match(/gecko/gi);
navOpera=NAV.match(/opera/gi); 
operatablet=NAV.match(/Tablet/gi); 
navIpad=NAV.match(/ipad/gi); 
navIphone=NAV.match(/iphone/gi);        
navFirefox = NAV.match(/Firefox/gi);
navMozilla = NAV.match(/mozilla/gi);
navChrome = NAV.match(/Chrome/gi);
navSafari = NAV.match(/safari/gi);
navandroid = NAV.match(/android/gi);
mobile = NAV.match(/mobile/gi);  
window["TYPEOFANDROID"] = 0;
window["NOMOBILE"] = 0;
var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
              if (mobile) {
                  var userAgent = navigator.userAgent.toLowerCase();
                  if ((userAgent.search("android") > -1) && (userAgent.search("mobile") > -1))
                         document.write("ANDROID MOBILE")
                   else if ((userAgent.search("android") > -1) && !(userAgent.search("mobile") > -1))
                                          // document.write("<b>:ANDROID TABLET:")
                           TYPEOFANDROID = 1;                              
              }
                          else {NOMOBILE=1;  }
             // else
                //  alert("NO MOBILE DEVICE DETECTED"); 
  //  FIREFOX za android 
 if(navFirefox && navandroid && TYPEOFANDROID == 0){HREFF = "#"; HREFTXT = "mobile_firefox_android"; }
 
  //  FIREFOX za android T
 if(navFirefox && navandroid && TYPEOFANDROID == 1){HREFF = "#"; HREFTXT = "mobile_firefox_android_tablet"; }
 
 // OPERA ZA ANDROID
 if(navOpera && navandroid){HREFF = "#"; HREFTXT = "opera_mobile_android"; }// provera 
 
 // OPERA ZA ANDROID TABLET
 if(navOpera && navandroid && operatablet){HREFF = "#"; HREFTXT = "opera_mobile_android_tablet"; }// provera 
//  safari mobile za IPHONE - i  safari mobile za IPAD i CHROME za IPAD 
  if(navSafari){
  var Iphonesafari = NAV.match(/iphone/gi);     
  if (Iphonesafari){HREFF = "#"; HREFTXT = "safari_mobile_iphone"; }  
 else if (navIpad){ HREFF = "#"; HREFTXT = "mobile_safari_chrome_ipad"; }
 else if (navandroid){ HREFF = "#"; HREFTXT = "android_native";  } }

  // TEST CHROME 
 if(navChrome &&  navSafari  && navMozilla){HREFF = "#"; HREFTXT = "mobile_chrome_android_tablet"; }
 
 if(navChrome && TYPEOFANDROID == 0 ){HREFF = "#"; HREFTXT = "chrome_browser"; }
 
 if(navMozilla && NOMOBILE==1 && gecko && navFirefox){HREFF = "#"; HREFTXT = "firefox_desktop"; } 
 
 //
 if( navOpera && TYPEOFANDROID == 0 && !mobile){HREFF = "#"; HREFTXT = "opera_desktop"; }
 
 return HREFTXT;

}
//&&&

var BROWSER =  DETECTBROWSER();

console.log("This is : " + BROWSER.toString());


var SCRIPTER = {
 ADD : function addScript( src ) {
  var s = document.createElement( 'script' );
  s.setAttribute( 'src', src );
  document.body.appendChild( s );
}
};

 


function CREATE_SURFACE(name_of_canvas , w , h ){

var c=document.getElementById(name_of_canvas);
c.width = w;c.height = h;
window["CRTAC"]=c.getContext("2d");
console.log("Msg : Surface is ready for drawing.");
 
}

 
 CREATE_SURFACE("indikator_canvas" , 640 , 640);
 SCRIPTER.ADD("js/o.js");
 SCRIPTER.ADD("js/indikator.js");
 
 
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}



//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                
// XML works
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function readXML(path){
if (window.XMLHttpRequest) {xmlhttpGA=new XMLHttpRequest();}
xmlhttpGA.open("GET",path,false);  
xmlhttpGA.send();
xmlDocGA=xmlhttpGA.responseXML;
return xmlDocGA;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                
// Array works
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function removeItem(arr){
    var what, a= arguments, L= a.length, ax;
    while(L> 1 && arr.length){
        what= a[--L];
        while((ax= arr.indexOf(what))!= -1){
            arr.splice(ax, 1);
        }
    }
    return arr;
}
   // removeA(arrayNAME,'-delete-all-value-');
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                
// Iphone html5 works
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function HABonTouch(){
 document.addEventListener( 'touchstart', iphoneHideAddressBarOnTouch , false ); 
 }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
function iphoneHideAddressBarOnTouch(){
     window.scrollTo(0,1);
}
  
  



// get element by ID
function E(id) { return document.getElementById(id); };



// Destroy DOM element
function removeElement(parentDiv, childDiv){
     if (childDiv == parentDiv) {
	 
     }
     else if (document.getElementById(childDiv)) {     
          var child = document.getElementById(childDiv);
          var parent = document.getElementById(parentDiv);
          parent.removeChild(child);
     }
     else {  
          return false;
     }
}


//localStorage get and set
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function LS_CREATE(name,value){
localStorage.setItem(name, value);
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function LS_GET(name){
return localStorage.getItem(name);
}


/* 
Hide iphone tab or full screen browser - safari
*/
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                
//  Call manual like this : hideURLbar() 
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 var HAB = false;
 addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
    function hideURLbar(){
        if(HAB==true){window.scrollTo(0,1);}
    }           
        function iphoneHideAddressBar() {
        HAB=true;
        }
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                
//  
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



