// Navigation - mobile pop up
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navUl = document.querySelector(".nav ul");

navToggle.addEventListener("click", function () {
  if (nav.classList.contains("shown")) {
    nav.classList.remove("shown");
    navUl.classList.remove("shown");
  } else {
    nav.classList.add("shown");
    navUl.classList.add("shown");
  }
});

//button div movement

const buttonContentGrid4x2 = document.getElementById("content-grid-4x2-button");
const buttonLocationContentGrid4x2Before = document.getElementById(
  "content-grid-4x2-button-relocation"
);
const buttonLocationContentGrid4x2After = document.getElementById(
  "content-grid-4x2-button-relocation-after"
);

if (window.matchMedia("(max-width: 700px)").matches) {
  console.log("test");
  buttonLocationContentGrid4x2Before.appendChild(buttonContentGrid4x2);
} else {
}
