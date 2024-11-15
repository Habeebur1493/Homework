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

// Part 2//

const elements = document.querySelectorAll(".element");

elements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        element.childNodes[3].style.opacity = 1;
    });

    element.addEventListener("mouseleave", () => {
        element.childNodes[3].style.opacity = 0;
    });
});

//Part 3//

const card = document.querySelector(".card");
const heart = document.querySelector(".heart");
const cursor = document.querySelector(".cursor");
const body = document.querySelector("body");

card.addEventListener("click", () => {
    heart.style.opacity = 0.8;
    heart.style.scale = 2;

    setTimeout(() => {
        heart.style.opacity = 0;
        heart.style.scale = 0;
    }, 400);
});

body.addEventListener("mousemove", (e) => {
    cursor.style.left = e.x + 10 + "px";
    cursor.style.top = e.y + 5 + "px";
});

card.addEventListener("mouseover", (e) => {
    cursor.style.scale = 3;
});

card.addEventListener("mouseleave", (e) => {
    cursor.style.scale = 1;
});