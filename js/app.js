console.log("Checking logs");

console.log(4 + 4/2 * 7);




//PURE JS to show how use variables getElement by ID and Class

//        Menu Hamburger show/hide
document.addEventListener("DOMContentLoaded", function(){
    var bar= document.getElementsByClassName("menu-collapsed")[0];

    bar.addEventListener("click", function() {
       console.log("menu-collapsed");
       document.getElementsByClassName('menu-collapsed')[0].classList.toggle('menu-expanded');
    });


});


$(document).ready(function() {
    console.log("DOM loaded");
    
//    Global variables
    var $body = $("html, body");
    var $scrollUp = $('#toTopPage');
//    var $bar = $(".menu-collapsed");
        
        
//        Menu Hamburger show/hide
//    $bar.click(function() {
//        $(this).toggleClass("menu-expanded");
//    });
    
    
    //scrolling to the top of page after refresh website
//    $body.stop().animate({scrollTop:0}, "500");

    //Scrolling to the top of page after click button
    $scrollUp.click(function() {
        $body.stop().animate({scrollTop:0}, "500");
    });
    
//    $("div.menu>ul>li>a:not(.modal-open),
//    .header-content>button>a:not(.modal-open)"
    var $menu = $("section#first-view .header-content>a:not(.slidershow), nav.menu>ul>li>a:not(.gallery-1, .form)");
        
    $menu.on("click", function() {
        event.preventDefault();
        var jumpTo = $(this).attr("href");
        var position = $(jumpTo).position().top;
        $body.animate({scrollTop: position}, 1000);
    });
});


//Map Google

window.onload = getMyLocation;
 
var map;
function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation);
  } else {
    alert("Oops, no geolocation support");
  }
}
 
//This function is inokved asynchronously by the HTML5 geolocation API.
function displayLocation(position) {
  //The latitude and longitude values obtained from HTML 5 API.
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
 
  //Creating a new object for using latitude and longitude values with Google map.
  var latLng = new google.maps.LatLng(latitude, longitude);
 
  showMap(latLng);
 
  addNearByPlaces(latLng);
  createMarker(latLng);
   
  //Also setting the latitude and longitude values in another div.
  var div = document.getElementById("location");
  div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
}
 
function showMap(latLng) {
  //Setting up the map options like zoom level, map type.
  var mapOptions = {
    center: latLng,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
 
  //Creating the Map instance and assigning the HTML div element to render it in.
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}
 
function addNearByPlaces(latLng) {
 
  var nearByService = new google.maps.places.PlacesService(map);
 
  var request = {
    location: latLng,
    radius: 1000,
    types: ['food', 'bakery', 'cafe', 'grocery_or_supermarket', 'meal_delivery','restaurant', 'meal_takeaway', 'shopping_mall']
  };
 
  nearByService.nearbySearch(request, handleNearBySearchResults);
}
 
function handleNearBySearchResults(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(place.geometry.location, place);
    }
  }
}
 
function createMarker(latLng, placeResult) {
  var markerOptions = {
    position: latLng,
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true
  }
  //Setting up the marker object to mark the location on the map canvas.
  var marker = new google.maps.Marker(markerOptions);
 
  if (placeResult) {
    var content = placeResult.name+"<br/>"+placeResult.vicinity+"<br/>"+placeResult.types;
    addInfoWindow(marker, latLng, content);
  }
  else {
    var content = "You are here: " + latLng.lat() + ", " + latLng.lng();
    addInfoWindow(marker, latLng, content);
  }
 
}
 
function addInfoWindow(marker, latLng, content) {
  var infoWindowOptions = {
    content: content,
    position: latLng
  };
 
  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
 
  google.maps.event.addListener(marker, "click", function() {
    infoWindow.open(map);
  });
}
