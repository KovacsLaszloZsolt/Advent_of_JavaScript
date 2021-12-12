const input = document.querySelector("#priceRange");
const dollars = document.querySelector(".dollars");

input.addEventListener("input", (e) => {
  dollars.innerText = e.target.value / 100;
});
