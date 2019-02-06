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
    
    var $menu = $("section#first-view .header-content>a");
        
    $menu.on("click", function() {
        event.preventDefault();
        var jumpTo = $(this).attr("href");
        var position = $(jumpTo).position().top;
        $body.animate({scrollTop: position}, 1000);
    });
});
