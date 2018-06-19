//Dropdown hamburger menu
const btn = document.querySelector(".hamburger__button");
const menu = document.querySelector(".nav__items");

btn.addEventListener("click", () => menu.classList.toggle("show"));