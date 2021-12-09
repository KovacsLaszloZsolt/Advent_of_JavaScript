const keys = document.querySelectorAll("a");

keys.forEach((key, index) => {
  key.addEventListener("click", () => {
    const URL = `./audio/key-${index + 1}.mp3`;
    new Audio(URL).play();
  });
});
