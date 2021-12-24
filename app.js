class SimplifiedBudget {
  constructor() {
    this.income = 0;
    this.expensesItem = [];
    this.expensesSum = 0;
    this.balance = 0;
  }

  init() {
    const incomeInput = document.querySelector("#income");
    const summaryAmounts = document.querySelectorAll(".summary-amount");
    const expenseName = document.querySelector("#expense-name");
    const expenseAmount = document.querySelector("#expense-amount");
    const addExpenseButton = document.querySelector(".add-expense-button");
    const expenseTable = document.querySelector(".expense-table");

    incomeInput.addEventListener("blur", (e) => {
      console.log(e.target.value.length);
      if (!e.target.value.length) {
        this.income = 0;
        console.log(this.income);
      } else {
        this.income = this.inputToFloat(e.target.value);
        incomeInput.innerText = "";
      }
      this.setDisplaySummary();
    });

    addExpenseButton.addEventListener("click", () => {
      if (expenseName.value && expenseAmount.value) {
        const name = expenseName.value;
        const price = this.inputToFloat(expenseAmount.value);
        const id = this.expensesItem.length
          ? this.expensesItem.at(-1).id + 1
          : 0;
        this.expensesItem.push({
          id: id,
          name: name,
          price: price,
        });

        this.expensesSum += price;

        this.setDisplaySummary();

        this.setNewExpense(expenseTable, id, name, price);
        expenseName.value = "";
        expenseAmount.value = "";
      }
    });
  }

  setNewExpense(expenseTable, id, name, price) {
    const expenseItem = document.createElement("div");
    expenseItem.classList.add("expense-item");
    expenseItem.setAttribute("data-id", id);

    expenseItem.innerHTML = `
          <div>${name}</div>
          <div>$${price}</div>
        `;

    const delBtn = document.createElement("div");
    delBtn.classList.add("delete");

    delBtn.innerHTML = `<button name="delete-expense" class="delete-expense">
                <img src="./images/trash.svg" alt="Tash" />
              </button>`;

    delBtn.addEventListener("click", () => {
      const deleteItem = document.querySelector(
        `.expense-item[data-id="${id}"]`
      );

      this.expensesSum -= this.expensesItem.find(
        (item) => item.id === id
      ).price;

      this.setDisplaySummary();

      this.expensesItem = this.expensesItem.filter(
        (expense) => expense.id !== id
      );
      expenseTable.removeChild(deleteItem);
    });
    expenseItem.appendChild(delBtn);
    expenseTable.appendChild(expenseItem);
  }

  setDisplaySummary() {
    const summaryAmounts = document.querySelectorAll(".summary-amount");
    this.balance = this.income - this.expensesSum;
    summaryAmounts[0].innerText = this.income;
    summaryAmounts[1].innerText = this.expensesSum;

    summaryAmounts[2].innerText = this.balance;
    console.log(this.balance > 0);
    switch (true) {
      case this.balance < 0:
        summaryAmounts[2].classList.value = "summary-amount negative";
        break;

      case this.balance > 0:
        summaryAmounts[2].classList.value = "summary-amount positive";
        console.log(summaryAmounts[2]);
        break;

      default:
        summaryAmounts[2].classList.value = "summary-amount";
        console.log("def", summaryAmounts[2]);
    }
  }

  inputToFloat(input) {
    return parseFloat(parseFloat(input).toFixed(2));
  }
}

const myBudget = new SimplifiedBudget();
myBudget.init();
