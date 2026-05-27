$(document).ready(function () {
  // Dispalay nabar and close naabar-icon
  $(".navbar-open").on("click", () => {
    $(".navbar-open").addClass("hidden");
    $(".navbar-close").removeClass("hidden");
    $(".nav-link-cont").slideDown();
  });

  // Hide nabar and close naabar-icon
  $(".navbar-close").on("click", () => {
    $(".navbar-open").removeClass("hidden");
    $(".navbar-close").addClass("hidden");
    $(".nav-link-cont").slideUp();
  });

  ScrollReveal().reveal(".reveal", {
    distance: "100px",
    duration: 850,
    origin: "bottom",
    delay: 200,
  });

  AOS.init({
    once: true,
  });

  $(".year").text(new Date().getFullYear());

  const lightbox = Glightbox({
    selector: ".glightbox",
    loop: true,
    touchNavigation: true,
    effect: "zoom",
  });
});
