"use strict";

$(document).ready(function () {
  // NAVBAR
  $(".navbar-open").on("click", () => {
    $(".navbar-open").addClass("hidden");
    $(".navbar-close").removeClass("hidden");
    $(".nav-link-cont").slideDown();
  });

  $(".navbar-close").on("click", () => {
    $(".navbar-open").removeClass("hidden");
    $(".navbar-close").addClass("hidden");
    $(".nav-link-cont").slideUp();
  });

  // SCROLL REVEAL
  ScrollReveal().reveal(".reveal", {
    distance: "100px",
    duration: 850,
    origin: "bottom",
    delay: 200,
  });
  // SWIPER
  new Swiper(".swiper", {
    slidesPerView: "auto",
    autoHeight: true,
    direction: "vertical",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      hide: false,
    },
    mousewheel: true,
  });

  AOS.init({
    once: true,
  });

  $(".year").text(new Date().getFullYear());
});
