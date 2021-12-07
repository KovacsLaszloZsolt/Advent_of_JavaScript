class Timer {
  constructor(min, sec) {
    (this.min = min), (this.sec = sec), (this.pause = false);
  }

  initTimer() {
    const startBtn = document.querySelector(".start");
    const minutes = document.querySelector(".minutes").childNodes[1];
    const seconds = document.querySelector(".seconds").childNodes[1];
    const settingsBtn = document.querySelector(".settings");
    const ring = document.querySelector(".ring");

    startBtn.addEventListener("click", () => {
      switch (startBtn.textContent) {
        case "start":
          startBtn.textContent = "pause";
          this.pause = false;
          minutes.disabled = true;
          seconds.disabled = true;
          settingsBtn.disabled = true;

          this.countDown(minutes, seconds, startBtn, ring);
          break;

        case "pause":
          startBtn.textContent = "start";
          this.pause = true;
          settingsBtn.disabled = false;
          break;

        default:
          startBtn.textContent = "start";
          ring.classList.remove("ending");
          settingsBtn.disabled = false;
          this.min = 15;
          this.sec = 0;

          minutes.value = this.setDisplayValue(this.min);
          seconds.value = this.setDisplayValue(this.sec);
      }
    });

    settingsBtn.addEventListener("click", () => {
      this.setTimer();
    });
  }

  setTimer() {
    const minutes = document.querySelector(".minutes").childNodes[1];
    const seconds = document.querySelector(".seconds").childNodes[1];
    
    minutes.disabled = false;
    seconds.disabled = false;

    minutes.addEventListener("blur", (e) => {
      if (!isNaN(parseInt(e.target.value))) {
        this.min = parseInt(e.target.value);
        minutes.value = this.setDisplayValue(this.min);
      } else {
        minutes.value = this.setDisplayValue(this.min);
      }
    });

    seconds.addEventListener("blur", (e) => {
      const inputSec = parseInt(e.target.value);

      if (isNaN(inputSec) || inputSec < 0 || inputSec > 59) {
        seconds.value = this.setDisplayValue(this.sec);
      } else {
        this.sec = parseInt(e.target.value);
        seconds.value = this.setDisplayValue(this.sec);
      }
    });
  }

  countDown(minutes, seconds, startBtn, ring) {
    const count = setInterval(() => {
      if (this.pause) {
        clearInterval(count);
        this.pause = false;
        return;
      }

      if (!this.min && this.sec === 1) {
        ring.classList.add("ending");
        startBtn.textContent = "reset";
        clearInterval(count);
      }

      if (!this.sec) {
        --this.min;
        minutes.value = this.setDisplayValue(this.min);
        this.sec = 59;
        seconds.value = this.sec;
      } else {
        --this.sec;
        seconds.value = this.setDisplayValue(this.sec);
      }
    }, 1000);
  }

  setDisplayValue(value) {
    return value < 10 ? `0${value}` : value;
  }
}

const timer = new Timer(15, 0);

timer.initTimer();