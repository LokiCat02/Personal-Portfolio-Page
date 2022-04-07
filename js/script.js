//===================================== DARK THEME =========================
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// PREVEIOSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

//We need to validate if the user has previously chosen a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate/ deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  //ADD or remove the dark/light icon -- icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //We save the theme and the current icon that the user has chosen
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

//===================================== MENU SHOW Y HIDDEN =========================
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// ================  MENU SHOW  =============
/*  Validate if the constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// ================  MENU HIDE  =============
/*  Validate if the constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//===================================== REMOVE MENU PRORFILE =========================
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // when we click on nav__links, we remove the show menu
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

//===================================== Typewriter Effect =========================

new Typewriter("#typewriter", {
  strings: [
    "Manuel Marin",
    "a Software Developer",
    "an Engineer",
    "a Team Player",
    "a Challenge Enthusiasts",
  ],
  autoStart: true,
  loop: true,
  cursor: "|",
});

//===================================== Portfolio Swiper =========================

var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
  // mousewheel: true,
  keyboard: true,
});

//===================================== SCROLL UP =========================
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");
  // When the scroll higher than 560 viewpoint /height , then the scroll up icon showld appear and on clicking should reach top of the page
  if (this.scrollY >= 560) {
    scrollup.classList.add("show-scroll");
  } else {
    scrollup.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

//===================================== SCROLL SECTION ACTIVE HIGHLIGHT =========================

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

//==================================== Send Email ====================================================
$(document).ready(function () {
  $("#email-sent-msg").dialog({
    autoOpen: false,
    height: 200,
    width: 400,
    modal: true,
    resizable: false,
    buttons: {
      Ok: function () {
        $(this).dialog("close");
      },
    },
  });
});

function sendEmail(params) {
  let tempParams = {
    subject: document.getElementById("email-subject").value,
    name: document.getElementById("sender-name").value,
    message: document.getElementById("email-message").value,
    email: document.getElementById("sender-email").value,
  };

  // $("#email-sent-msg").dialog("open");
  // $(".ui-widget-header").css("background", "hsl(210.5, 78.7%, 46.1%)");
  // $(".ui-button .ui-corner-all .ui-widget").css(
  //   "background",
  //   "hsl(210.5, 78.7%, 46.1%)"
  // );
  // $(".ui-dialog-title").css("color", "#FFF");

  emailjs
    .send("service_xmpvb56", "template_kjj3j48", tempParams)
    .then(function (res) {
      $("#email-sent-msg").dialog("open");
      $(".ui-widget-header").css("background", "hsl(210.5, 78.7%, 46.1%)");
      $(".ui-button .ui-corner-all .ui-widget").css(
        "background",
        "hsl(210.5, 78.7%, 46.1%)"
      );
      $(".ui-dialog-title").css("color", "#FFF");
    });
}
