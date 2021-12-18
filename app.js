const main = document.querySelector("main");

window.addEventListener("scroll", (e) => {
  const subTitles = document.querySelectorAll("h3");
  const asideNav = [...document.querySelector(".aside-nav").children];

  subTitles.forEach((subtitle, index) => {
    if (subtitle.getBoundingClientRect().top < window.innerHeight / 2) {
      const selectedNavElement = document.querySelector(".selected");
      selectedNavElement ? selectedNavElement.classList.remove("selected") : "";
      asideNav[index].classList.add("selected");
    }
  });
});
