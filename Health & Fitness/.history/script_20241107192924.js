const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

menu.addEventListener("click", () => {
    nav.style.height = "100%";
    ul.style.display = "flex";
    menu.style.display = "none";
    close.style.display = "initial";
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    h1.style.display = "none";
    button.style.display = "none";
});

close.addEventListener("click", () => {
    nav.style.height = "20%";
    ul.style.display = "none";
    menu.style.display = "initial";
    close.style.display = "none";
    h1.style.display = "initial";
    button.style.display = "initial";
});

jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});