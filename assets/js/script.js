const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".value-navbar");
hamburgerMenu.addEventListener("click", function () {
  ["show", "fixed"].map((e) => hamburgerMenu.classList.toggle(e));
  navbar.classList.toggle("show");
});
