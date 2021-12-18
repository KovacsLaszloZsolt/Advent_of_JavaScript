const stars = [...document.querySelectorAll(".star")];
const starRatingCtn = document.querySelector(".star-rating");

const removeAllRanked = () => {
  const ranked = document.querySelectorAll(".ranked");

  ranked.forEach((star) => star.classList.remove("ranked"));
};

stars.forEach((star, index) => {
  star.addEventListener("mouseenter", (e) => {
    starRatingCtn.addEventListener("mouseleave", removeAllRanked);

    console.log(starRatingCtn);
    stars.slice(0, index + 1).forEach((s) => s.classList.add("ranked"));

    const ranked = [...document.querySelectorAll(".ranked")];
    if (ranked.length > index + 1) {
      ranked
        .slice(index + 1)
        .forEach((rStar) => rStar.classList.remove("ranked"));
    }
  });

  star.addEventListener("click", () => {
    starRatingCtn.removeEventListener("mouseleave", removeAllRanked);
  });
});
