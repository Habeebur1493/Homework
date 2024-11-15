const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");

menu.addEventListener("click", () => {
    nav.style.height = "100%";
    ul.style.display = "flex";
    menu.style.display = "none";
    close.style.display = "initial";
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
});

close.addEventListener("click", () => {
    nav.style.height = "20%";
    ul.style.display = "none";
    menu.style.display = "initial";
    close.style.display = "none";
});
