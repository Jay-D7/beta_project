

document.addEventListener("DOMContentLoaded", function(){
    console.log("działa");
    var prev = document.querySelector("#prevPicture");
    var next = document.querySelector("#nextPicture");
    var pics = document.querySelectorAll(".slider  li");
    
    var index = 0;
    
    console.log(prev);
    console.log(next);
    console.log(pics);
    console.log(index);
    
    pics[index].classList.add("visible");
    
    prev.addEventListener("click", function() {
       console.log("prev");
       pics[index].classList.remove("visible");
       index--;
       if (index < 0) {
           index = 0;
       }
       pics[index].classList.add("visible");
    });
    
    next.addEventListener("click", function() {
       console.log("next");
       pics[index].classList.remove("visible");
       index++;
       if (index > pics.length - 1) {
           index = pics.length - 1;
       }
       pics[index].classList.add("visible");
    });
});