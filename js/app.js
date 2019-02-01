console.log("Check log");

console.log(4 + 4);

//var $ = require('jquery');
//window.$ = $;
//require('bootstrap');
//require('bootstrap');

$(document).ready(function() {
    console.log("DOM loaded");
    
//    Global variables
    var $body = $("html, body");
    var $scrollUp = $('.btn-scroll-up');
    
    
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
