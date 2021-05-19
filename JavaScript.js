let left = document.querySelector(".left");
let leftExpand = document.querySelector(".landing .left-expand");
let arrow = document.querySelector(".landing .arrow");
let toggleLeft = document.querySelector(".landing .left");
left.addEventListener("click", function(e) {
    leftExpand.classList.toggle("toggle");
    arrow.classList.toggle("rotate");
    toggleLeft.classList.toggle("toggleLeft");
})

/*window.addEventListener("scroll", function(e) {
    if (window.scrollY >= 400) {
        document.querySelector(".introduction .heading").style.opacity = "1";
        document.querySelector(".introduction .heading").style.transition = "2s all ease";

        document.querySelector(".introduction .text").style.opacity = "1";
        document.querySelector(".introduction .text").style.transition = "2s all ease";


    } else {
        document.querySelector(".introduction .heading").style.opacity = "0";
        document.querySelector(".introduction .heading").style.transition = "0.5s all ease";
        document.querySelector(".introduction .text").style.opacity = "0";
        document.querySelector(".introduction .text").style.transition = "0.5s all ease";

    }
})*/