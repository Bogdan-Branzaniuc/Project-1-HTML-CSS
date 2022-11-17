const mainNavMenu = document.querySelector('#main-nav #menu');
const burgerMenu = document.querySelector('#main-nav #burger-icon');
const burgerMenuIcon = document.querySelector('#main-nav #burger-icon>i');

let burgerMenuClicked = window.width <= 1200 ? false : true;

burgerMenu.onclick = function (event) {
    event.stopPropagation;
    console.log(burgerMenuClicked);
    mainNavMenu.style.display = burgerMenuClicked ? "flex" : "none";
    burgerMenuIcon.style.scale = burgerMenuClicked ? "1.3" : "1";

    burgerMenuClicked = !burgerMenuClicked;
};