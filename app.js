const toaster = document.querySelector(".toaster");
const closeToasterBtn = document.querySelector(".close-toaster");

const setCollapsed = () => {
  if (toaster.classList.value.includes("collapsed")) {
    toaster.classList.remove("collapsed");
  }

  setTimeout(() => {
    removeCollapsed();
  }, 15000);
};

const removeCollapsed = () => {
  toaster.classList.add("collapsed");
  window.removeEventListener("mousemove", setCollapsed);
};

window.addEventListener("mousemove", setCollapsed);

closeToasterBtn.addEventListener("click", removeCollapsed);
