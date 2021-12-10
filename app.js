class Keyboard {
  constructor() {
    this.activeBtn = null;
  }

  init() {
    const buttons = document.querySelectorAll("button");
    this.activeBtn = this.setActiveButton(buttons);

    window.addEventListener("keyup", (e) => {
      if (
        e.key.toLocaleLowerCase() === this.activeBtn.dataset.key.toLowerCase()
      ) {
        this.activeBtn = this.setActiveButton(buttons);
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "CapsLock") {
        if (
          e.key.toLocaleLowerCase() === this.activeBtn.dataset.key.toLowerCase()
        ) {
          this.activeBtn = this.setActiveButton(buttons);
        }
      }
    });
  }

  setActiveButton(buttons) {
    const prevActiveBtn = document.querySelector(".jiggle");

    if (prevActiveBtn) {
      prevActiveBtn.classList.remove("jiggle");
    }

    const activeButtonIndex = Math.floor(Math.random() * buttons.length);

    buttons[activeButtonIndex].classList.add("jiggle");

    return buttons[activeButtonIndex];
  }
}

const keyboard = new Keyboard();

keyboard.init();
