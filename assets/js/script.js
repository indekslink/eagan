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
  document.body.classList.toggle("overflow-hidden");
  navbar.classList.toggle("show");
}
document
  .querySelector(".to-top")
  .addEventListener("click", () => window.scrollTo(0, 0));

const filterYear = document.querySelectorAll(".filter-year button");
filterYear.forEach((f) => {
  f.addEventListener("click", function () {
    filterYear.forEach((e) => e.classList.remove("btn-warning", "fw-bold"));
    f.classList.add("btn-warning", "fw-bold");
  });
});
