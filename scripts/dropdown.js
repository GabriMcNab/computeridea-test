//Dropdown hamburger menu
const btn = document.querySelector(".hamburger__button");
const menu = document.querySelector(".nav__items");

btn.addEventListener("click", () => menu.classList.toggle("show"));

//Show navbar dorpdown on click if screen width < 900px
const servizi = document.querySelector("#servizi");
const gestionale = document.querySelector("#gestionale");

const serviziDropdown = document.querySelector("#servizi-dropdown");
const gestionaleDropdown = document.querySelector("#gestionale-dropdown");

const mediaQuery = window.matchMedia( "(max-width: 900px)" );

if(mediaQuery.matches) {
  servizi.addEventListener("click", (e) => {
    e.preventDefault();
    serviziDropdown.classList.toggle("toggle")
  });
  gestionale.addEventListener("click", (e) => {
    e.preventDefault();
    gestionaleDropdown.classList.toggle("toggle")
  });
}