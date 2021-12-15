const inputFields = [...document.querySelector(".fields").children];
const codeLength = inputFields.length;
inputFields.forEach((elem, index) => {
  elem.addEventListener("input", (e) => {
    if (e.target.value.length === 1 && index < codeLength - 1) {
      inputFields[index + 1].focus();
    }
  });

  elem.addEventListener("paste", (e) => {
    const pastedText = e.clipboardData
      .getData("text/plain")
      .slice(0, codeLength)
      .split("");

    pastedText.forEach((char, index) => {
      inputFields[index].value = char;
    });
    inputFields[codeLength - 1].focus();
  });
});
