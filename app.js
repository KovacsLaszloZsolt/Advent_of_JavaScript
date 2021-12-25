const creditCardImage = document.querySelector(".credit-card__wrapper");

const cardNumber = document.querySelector(".card-number");
const cardNumberInput = document.querySelector("[name=card-number]");

const cardHolder = document.querySelector(".card-holder");
const cardHolderInput = document.querySelector("[name=card-holder]");

const expirationDate = document.querySelector(".expiration-date");
const expirationDateMonthInput = document.querySelector(
  "[name=expiration-date-month]"
);
const expirationDateYearInput = document.querySelector(
  "[name=expiration-date-year]"
);

const signature = document.querySelector(".signature");

const cvv = document.querySelector(".cvv");
const cvvInput = document.querySelector("[name=cvv]");

cardNumberInput.addEventListener("input", (e) => {
  validateCardNumber(e, e.target.value);
});

const validateCardNumber = (e, cardNum) => {
  if (cardNum.length > 16) {
    e.target.value = cardNum.slice(0, 16);
    return;
  }

  let cardNumArr = [...cardNum];

  if (cardNumArr[0] === "0") {
    cardNumberInput.value = cardNum.slice(1);
  }

  cardNumArr = cardNumArr.filter((num) => isNaN(parseInt(num)) === false);

  cardNumberInput.value = cardNumArr.join("");
  setCardType(cardNumArr);
};

const setCardType = (cardNumArr) => {
  const firstNum = cardNumArr[0];

  switch (true) {
    case firstNum === "1" || firstNum === "2":
      creditCardImage.classList.value = "credit-card__wrapper visa";
      break;

    case firstNum === "3" || firstNum === "4":
      creditCardImage.classList.value = "credit-card__wrapper american";
      break;

    case firstNum === "5" || firstNum === "6":
      creditCardImage.classList.value = "credit-card__wrapper discover";
      break;

    case firstNum === "7" || firstNum === "8":
      creditCardImage.classList.value = "credit-card__wrapper mastercard";
      break;

    default:
      creditCardImage.classList.value = "credit-card__wrapper discover";
  }

  setDisplayCardNum(cardNumArr);
};

const setDisplayCardNum = (cardNumArr) => {
  let displayNum = cardNumArr.join("");

  if (displayNum.length >= 4) {
    displayNum = displayNum.match(/.{1,4}/g);
    displayNum.forEach((item, index) => {
      if (item.length === 4) {
        displayNum[index] = item + " ";
      }
    });
    displayNum = displayNum.join("");
  }

  setCardDisplayValues(cardNumber, displayNum);
};

let expirationMonth;
let expirationYear;

cardHolderInput.addEventListener("input", (e) => {
  setCardDisplayValues(cardHolder, e.target.value);
  signature.innerText = e.target.value;
});

const setCardDisplayValues = (container, value) => {
  [...container.children].forEach((item) => (item.innerText = value));
};

expirationDateMonthInput.addEventListener("change", (e) => {
  expirationMonth =
    e.target.value.length === 1 ? `0${e.target.value}` : `${e.target.value}`;
  setCardDisplayValues(
    expirationDate,
    `${dateIsExist(expirationMonth)}/${dateIsExist(expirationYear)}`
  );
});

expirationDateYearInput.addEventListener("change", (e) => {
  expirationYear = `${e.target.value}`;
  setCardDisplayValues(
    expirationDate,
    `${dateIsExist(expirationMonth)}/${dateIsExist(expirationYear)}`
  );
});

const dateIsExist = (value) => {
  return value ? value : "";
};

cvvInput.addEventListener("focus", () => {
  creditCardImage.classList.add("flip");
});

cvvInput.addEventListener("blur", () => {
  creditCardImage.classList.remove("flip");
});

cvvInput.addEventListener("input", (e) => {
  const cvvNum = e.target.value;
  if (cvvNum.length > 3) {
    e.target.value = cvvNum.slice(0, 3);
  }

  cvv.innerText = e.target.value;
});
