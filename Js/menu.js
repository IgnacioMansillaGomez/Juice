"use strict";
const icono = document.querySelector(".icono__desplegable");
const menu = document.querySelector(".nav__links");

icono.addEventListener("click", () => {
  menu.classList.toggle("spread");
});

window.addEventListener("click", (e) => {
  if (
    menu.classList.contains("spread") &&
    e.target != icono &&
    e.target != menu
  ) {
    menu.classList.toggle("spread");
  }
});
