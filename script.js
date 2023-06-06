"use strict";

const navBar = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("nav-links-open");
});
