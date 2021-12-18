const main = document.querySelector("main");

window.addEventListener("scroll", (e) => {
  const subTitles = document.querySelectorAll("h3");
  const asideNav = [...document.querySelector(".aside-nav").children];
  console.log(asideNav);

  subTitles.forEach((subtitle, index) => {
    console.log(subtitle.getBoundingClientRect().top);
    console.log(window.innerHeight / 2);
    if (subtitle.getBoundingClientRect().top < window.innerHeight / 2) {
      const selectedNavElement = document.querySelector(".selected");
      selectedNavElement ? selectedNavElement.classList.remove("selected") : "";
      asideNav[index].classList.add("selected");
    }
  });
  //   console.log("wh: ", window.innerHeight);
  //   console.log(subTitles[0]);
});
