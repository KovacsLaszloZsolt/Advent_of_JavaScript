const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#confirm-password");
const showHideBtns = document.querySelectorAll(".show-hide");

nameInput.addEventListener("blur", () => {
  const validationElements = setValidation(nameInput);

  validation(
    nameInput.value,
    validationElements[0],
    validationElements[1],
    nameInput.name
  );
});

emailInput.addEventListener("blur", () => {
  const validationElements = setValidation(emailInput);
  validation(
    emailInput.value,
    validationElements[0],
    validationElements[1],
    emailInput.name
  );
});

passwordInput.addEventListener("blur", () => {
  const validationElements = setValidation(passwordInput);
  validation(
    passwordInput.value,
    validationElements[0],
    validationElements[1],
    passwordInput.name
  );

  const validationElementsPasswordConfirmInput =
    setValidation(passwordConfirmInput);

  passwordValidation(
    validationElementsPasswordConfirmInput[0],
    validationElementsPasswordConfirmInput[1]
  );
});

passwordConfirmInput.addEventListener("blur", () => {
  const validationElements = setValidation(passwordConfirmInput);

  passwordValidation(validationElements[0], validationElements[1]);
});

const passwordValidation = (errorCtn, successCtn) => {
  if (passwordInput.value.length && passwordConfirmInput.value.length) {
    if (passwordInput.value !== passwordConfirmInput.value) {
      errorCtn.innerHTML = `<img src='./images/error.svg' alt='Error' />Password and confirm password must match`;
    } else {
      successCtn.innerHTML = `<img src="./images/success.svg" alt="Success" />`;
    }
  }
};

const setValidation = (input) => {
  const errorCtn = input.parentElement.children[2];
  const successCtn = input.parentElement.children[3];

  clearCtn(errorCtn);
  clearCtn(successCtn);
  return [errorCtn, successCtn];
  //
};

const clearCtn = (ctn) => {
  if (ctn.children) {
    ctn.innerHTML = "";
  }
};

const validation = (input, errorCtn, successCtn, name) => {
  if (!input) {
    errorCtn.innerHTML = `
        <img src='./images/error.svg' alt='Error' />A ${name} is required`;
    return;
  }

  if (name === "email") {
    const mailformat =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    //     console.log(e.target.value.match(mailformat));

    if (!input.match(mailformat)) {
      errorCtn.innerHTML = `<img src='./images/error.svg' alt='Error' />Must enter a valid email`;
      return;
    }
  }

  successCtn.innerHTML = `<img src="./images/success.svg" alt="Success" />`;
};

showHideBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (btn.parentElement.classList.value.includes("show")) {
      btn.parentElement.classList.remove("show");
      btn.parentElement.children[0].type = "password";
    } else {
      btn.parentElement.classList.add("show");
      btn.parentElement.children[0].type = "text";
      console.log(btn.parentElement.children);
    }
  });
});
