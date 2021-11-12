$(document).ready(function () {
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
    actionOnScroll(scr);
  };

  function toggleMenu() {
    hamburgerMenu.forEach((hmb) =>
      ["show"].map((e) => hmb.classList.toggle(e))
    );
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
  let $btns = $("#documentation .filter-year button");

  $btns.on("click", function (e) {
    let selector = $(e.target).attr("data-filter");
    $("#documentation .grid").isotope({
      filter: selector,
    });

    return false;
  });

  const navLink = Array.from(document.querySelectorAll(".my-nav .menus a"));
  const linkHasChild = Array.from(
    document.querySelectorAll(".my-nav .menus .has-child span")
  );

  [...navLink, ...linkHasChild].forEach((menu) => {
    // console.log(menu);
  });
  const sectionMenu = document.querySelectorAll(".section-menu");
  function activeMenu(scr) {
    const about = ["#summary", "#mission", "#vision", "#lines-of-business"];
    sectionMenu.forEach((section) => {
      let sectionTop = section.offsetTop;
      let sectionHeight = sectionTop + section.offsetHeight;
      let idSection = section.getAttribute("id");
      if (scr > sectionTop && scr < sectionHeight) {
        console.log(idSection);
      }
    });
  }

  const docOffTop = Math.round($("#documentation").offset().top);
  function actionOnScroll(scroll) {
    if (scroll > docOffTop) {
      $("#documentation .filter-year #btn1").trigger("click");
    }

    activeMenu(scroll);
  }
});
