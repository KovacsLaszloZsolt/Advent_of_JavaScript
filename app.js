const pinkDot = document.querySelector(".dot");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close").children[0];
console.log(closeBtn);

pinkDot.addEventListener("click", () => {
  overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});
