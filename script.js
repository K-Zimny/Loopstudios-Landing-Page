const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navUl = document.querySelector(".nav ul");

navToggle.addEventListener("click", function () {
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
    navUl.classList.remove("hidden");
  } else {
    nav.classList.add("hidden");
    navUl.classList.add("hidden");
  }
});
