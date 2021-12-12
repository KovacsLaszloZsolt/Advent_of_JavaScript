const tipAmount = document.querySelector("#tip-amount");
const totalPerPerson = document.querySelector("#total-per-person");

const billAmount = document.querySelector("#bill-amount");
const numberOfPeople = document.querySelector("#number-of-people");

const tips = document.querySelectorAll("[name=tip]");

const calculateBtn = document.querySelector("#calculate");

calculateBtn.addEventListener("click", () => {
  const bill = parseFloat(billAmount.value);
  billAmount.value = bill;

  const numOfPerson = parseInt(numberOfPeople.value)
    ? parseInt(numberOfPeople.value)
    : 1;
  numberOfPeople.value = numOfPerson;

  const tipPercentage =
    parseInt([...tips].find((tip) => tip.checked).value) / 100;

  if (bill) {
    const tip = toFixValue(bill * tipPercentage);
    tipAmount.innerText = tip;

    totalPerPerson.innerText = toFixValue(bill + parseFloat(tip) / numOfPerson);
  } else {
    tipAmount.innerText = 0;
    totalPerPerson.innerText = 0;
  }
});

const toFixValue = (value) => {
  if (value !== parseInt(value)) {
    value = value.toFixed(2);
  }

  return value;
};
