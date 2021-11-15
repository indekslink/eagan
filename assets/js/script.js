$(document).ready(function () {
  const webCreated = 2021;
  const currentYear = new Date().getFullYear();

  document.querySelector("footer .f-year").textContent =
    currentYear == webCreated ? webCreated : webCreated + " - " + currentYear;

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
      // document.querySelector(".navigation-bottom"),
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

  const navLink = Array.from(
    document.querySelectorAll(".my-nav .menus li.list-menu a")
  );
  const linkHasChild = Array.from(
    document.querySelectorAll(".my-nav .menus .has-child span")
  );
  const menuActiveOnScroll = [...navLink, ...linkHasChild];
  // console.log(menuActiveOnScroll);
  // const sectionMenu = document.querySelectorAll(".section-menu");

  function activeMenu(scr) {
    menuActiveOnScroll.forEach((menu) => {
      let section = document.querySelector(
        `#${menu.getAttribute("data-section")}`
      );

      let sectionTop = section.offsetTop;
      let sectionHeight = sectionTop + section.offsetHeight;

      menu.classList.remove("active");
      if (scr > sectionTop - 300 && scr < sectionHeight - 200) {
        if (menu.getAttribute("data-section") == section.getAttribute("id")) {
          menu.classList.add("active");
        }
      }
    });
  }

  navLink.forEach((e) => {
    e.addEventListener("click", function () {
      let section = document.querySelector(
        `#${e.getAttribute("data-section")}`
      );
      window.scrollTo(0, section.offsetTop - 100);
    });
  });

  document
    .querySelector("button.learn-more")
    .addEventListener("click", function () {
      window.scrollTo(
        0,
        document.querySelector("section#summary").offsetTop - 100
      );
    });

  const navFixed = (scr) => {
    ["bg-light", "fixed-top", "shadow-sm"].forEach((e) => {
      document.querySelector(".my-nav").classList.toggle(e, scr > 150);
    });
  };

  const docOffTop = Math.round($("#documentation").offset().top);

  function actionOnScroll(scroll) {
    if (scroll > docOffTop) {
      $("#documentation .filter-year #btn1").trigger("click");
    }

    activeMenu(scroll);
    navFixed(scroll);

    // aos
    AOS.init({
      once: true,
      delay: 100,
      ease: "linear",
    });
  }

  // lightbox
  $("#documentation .grid a").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });
});
