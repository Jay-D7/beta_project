console.log("Check log");

console.log(4 + 4);

//var $ = require('jquery');
//window.$ = $;
//require('bootstrap');
//require('bootstrap');

//PURE JS to show how use variables getElement by ID and Class


//document.addEventListener("DOMContentLoaded", function(){
//    console.log("Działa");
////    var bar = document.getElementById('#first-view');
//});

//document.addEventListener("DOMContentLoaded", function(){
////    Wywołanie buttona
//    var bar = document.querySelector("menu-collapsed");
//    
////    dodajemy event listener na zdarzenia "click"
//    button.addEventListener("click" ,function() {
//       console.log("Hura działa!!!");
//    });
//});

//document.addEventListener("DOMContentLoaded", function(){
////    var bar = document.getElementsByClassName('menu-collapsed');
    
//    document.addEventListener("click" ,function() {
//    var bar = document.getElementsByClassName('menu-collapsed');
//       bar.classList.toggle("menu-expanded");
//    });
////});

//function test() {
//    
//}
//function myFunction("click",) {
//    var element = document.getElementByClassName('menu-collapsed');
//    element.classList.toggle("mystyle");
//}


$(document).ready(function() {
    console.log("DOM loaded");
    
//    Global variables
    var $body = $("html, body");
    var $scrollUp = $('#toTopPage');
    var $bar = $(".menu-collapsed");
        
        
//        Menu Hamburger show/hide
    $bar.click(function() {
        $(this).toggleClass("menu-expanded");
    });
    
    
    //scrolling to the top of page after refresh website
//    $body.stop().animate({scrollTop:0}, "500");

    //Scrolling to the top of page after click button
    $scrollUp.click(function() {
        $body.stop().animate({scrollTop:0}, "500");
    });
    
    var $menu = $("section#first-view .header-content>a");
        
    $menu.on("click", function() {
        event.preventDefault();
        var jumpTo = $(this).attr("href");
        var position = $(jumpTo).position().top;
        $body.animate({scrollTop: position}, 1000);
    });
});
