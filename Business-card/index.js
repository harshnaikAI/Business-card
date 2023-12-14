let info = document.querySelector(".info");
let button = document.querySelector(".menu-icon");
let h2 = document.querySelector("h2");
let card = document.querySelector(".card");

card.addEventListener("mouseover", function () {
  info.style.display = "block";
  h2.style.display = "none";
});

card.addEventListener("mouseleave", function () {
  info.style.display = "none";
  h2.style.display = "block";
});