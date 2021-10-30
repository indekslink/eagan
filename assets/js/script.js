const hamburgerMenu = document.querySelectorAll(".hamburger-menu");
const navbar = document.querySelector(".value-navbar");
hamburgerMenu.forEach((hmb) =>
  hmb.addEventListener("click", function () {
    toggleMenu();
  })
);
window.onscroll = () => {
  const scr = window.scrollY;
  [
    document.querySelector(".to-top"),
    document.querySelector(".navigation-bottom"),
  ].map((e) => e.classList.toggle("show-navigation", scr > 50));
};

function toggleMenu() {
  hamburgerMenu.forEach((hmb) => ["show"].map((e) => hmb.classList.toggle(e)));
  navbar.classList.toggle("show");
}
document
  .querySelector(".to-top")
  .addEventListener("click", () => window.scrollTo(0, 0));
