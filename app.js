const passwordElements = {
  letters: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],

  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  symbols: [
    "~",
    "`",
    "!",
    "@",
    "#",
    "£",
    "€",
    "$",
    "¢",
    "¥",
    "§",
    "%",
    "°",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "{",
    "}",
    "[",
    "]",
    "|",
    "\\",
    "/",
    ":",
    ";",
    '"',
    "'",
    "<",
    ">",
    ",",
    ".",
    "?",
  ],
  similar: ["i", "l", 1, "L", "o", 0, "O"],
};

class PasswordGenerator {
  constructor(passwordElements, passwordIncludes, length) {
    (this.passwordElements = passwordElements),
      (this.passwordIncludes = passwordIncludes),
      (this.length = length);
    this.password = "";
  }

  generatePassword() {
    for (let i = 0; i < this.length; i++) {
      const name =
        this.passwordIncludes[this.randomNumber(this.passwordIncludes.length)];

      if (name === "uppercase" || name === "lowercase") {
        const char =
          this.passwordElements.letters[
            this.randomNumber(this.passwordElements.letters.length)
          ];
        name === "uppercase"
          ? (this.password += char.toUpperCase())
          : (this.password += char.toLowerCase());
      } else {
        const char =
          this.passwordElements[name][
            this.randomNumber(this.passwordElements[name].length)
          ];

        this.password += char;
      }
    }
    return this.password;
  }

  randomNumber(length) {
    return Math.floor(Math.random() * length);
  }
}

const passwordLength = document.querySelector("#length");
const lengthDisplayText = document.querySelector("#lengthText");
const symbols = document.querySelector("#symbols");
const numbers = document.querySelector("#numbers");
const lowercase = document.querySelector("#lowercase");
const uppercase = document.querySelector("#uppercase");
const similar = document.querySelector("#similar");
const copyBtn = document.querySelector(".copy");
const displayText = document.querySelector("#password");

const possibleChars = [symbols, numbers, lowercase, uppercase, similar];

copyBtn.addEventListener("click", () => {
  // displayText.select();
  // displayText.setSelectionRange(0, 99999);
  if (displayText.length) {
    navigator.clipboard.writeText(displayText.value);
    copyBtn.classList.add("copied");
  }
});

let pwLength = passwordLength.value;
let passwordIncludes = [];

passwordLength.addEventListener("input", (e) => {
  pwLength = e.target.value;
  lengthDisplayText.innerText = e.target.value;

  if (passwordIncludes.length) {
    displayText.value = generate(passwordElements, passwordIncludes, pwLength);
  }
});

possibleChars.forEach((item) =>
  item.addEventListener("click", (e) => {
    const name = e.target.name;
    if (e.target.checked) {
      if (name === "similar") {
        passwordIncludes = [name];
        possibleChars
          .filter((elem) => elem !== similar)
          .forEach((item) => (item.checked = false));
      } else {
        passwordIncludes = passwordIncludes.filter(
          (item) => item !== "similar"
        );

        similar.checked = false;
        passwordIncludes.push(name);
      }
    } else {
      passwordIncludes.filter((pswElem) => pswElem !== name);
    }

    displayText.value = generate(passwordElements, passwordIncludes, pwLength);
  })
);

function generate() {
  if (copyBtn.classList.value.includes("copied")) {
    copyBtn.classList.remove("copied");
  }

  const password = new PasswordGenerator(
    passwordElements,
    passwordIncludes,
    pwLength
  );
  return password.generatePassword();
}
