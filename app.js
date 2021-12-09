const menuItems = [
  {
    name: "French Fries with Ketchup",
    price: 223,
    image: "plate__french-fries.png",
    alt: "French Fries",
    count: 0,
  },
  {
    name: "Salmon and Vegetables",
    price: 512,
    image: "plate__salmon-vegetables.png",
    alt: "Salmon and Vegetables",
    count: 0,
  },
  {
    name: "Spaghetti Meat Sauce",
    price: 782,
    image: "plate__spaghetti-meat-sauce.png",
    alt: "Spaghetti with Meat Sauce",
    count: 0,
  },
  {
    name: "Bacon, Eggs, and Toast",
    price: 599,
    image: "plate__bacon-eggs.png",
    alt: "Bacon, Eggs, and Toast",
    count: 0,
  },
  {
    name: "Chicken Salad with Parmesan",
    price: 698,
    image: "plate__chicken-salad.png",
    alt: "Chicken Salad with Parmesan",
    count: 0,
  },
  {
    name: "Fish Sticks and Fries",
    price: 634,
    image: "plate__fish-sticks-fries.png",
    alt: "Fish Sticks and Fries",
    count: 0,
  },
];

class Restaurant {
  constructor(menuItems) {
    this.menuItems = menuItems;
  }

  setDisplayPrice = (price) => {
    return Number.isInteger(price)
      ? `$${(price / 100).toFixed(2)}`
      : `${price.toFixed(2)}`;
  };

  initMenu() {
    const menu = document.querySelector(".menu");

    this.menuItems.forEach((dish) => {
      const dishCtn = document.createElement("li");
      dishCtn.innerHTML = `
              <div class="plate">
                <img src="images/${dish.image}" alt="${dish.alt}" class="plate" />
              </div>`;

      const content = document.createElement("div");
      content.classList.add("content");

      content.innerHTML = `
              <p class="menu-item">${dish.name}</p>
              <p class="price">${this.setDisplayPrice(dish.price)}</p>`;

      dishCtn.appendChild(content);
      menu.appendChild(dishCtn);

      const addBtn = document.createElement("button");
      addBtn.classList.add("add");

      addBtn.textContent = `Add to Cart`;

      addBtn.addEventListener("click", () => {
        this.setAddBtn(addBtn, dish);
      });
      content.appendChild(addBtn);
    });
  }

  setAddBtn(addBtn, dish) {
    if (addBtn.classList.value.includes("add")) {
      addBtn.classList.remove("add");
      addBtn.classList.add("in-cart");
      addBtn.innerHTML = '<img src="images/check.svg" alt="Check" />In Cart';

      dish.count++;
      this.addDishToCart(dish, addBtn);
    }
  }

  addDishToCart(dish, addBtn) {
    const cartSummary = document.querySelector(".cart-summary");
    const listItem = document.createElement("li");
    listItem.setAttribute("data-name", dish.name);

    const plate = document.createElement("div");
    plate.classList.add("plate");

    plate.innerHTML = `<img
          src=images/${dish.image}
          alt=${dish.alt}
          class='plate'
        />`;

    const plateQuantity = document.createElement("div");
    plateQuantity.classList.add("quantity");
    plateQuantity.innerHTML = dish.count;

    plate.appendChild(plateQuantity);
    listItem.appendChild(plate);

    const content = document.createElement("div");
    content.classList.add("content");
    content.innerHTML = `
      <p class='price'>${this.setDisplayPrice(dish.price)}</p>
      <p class='menu-item'>${dish.name}</p>`;

    listItem.appendChild(content);

    const quantityWrapper = document.createElement("div");
    quantityWrapper.classList.add("quantity__wrapper");
    listItem.appendChild(quantityWrapper);

    const quantity = document.createElement("div");
    quantity.classList.add("quantity");
    quantity.innerText = dish.count;

    quantityWrapper.appendChild(quantity);

    const decreaseBtn = document.createElement("button");
    decreaseBtn.classList.add("decrease");

    decreaseBtn.innerHTML = `<img src='images/chevron.svg' />`;
    decreaseBtn.addEventListener("click", () => {
      setQuantity(dish, "dec", cartSummary);
    });

    quantityWrapper.insertBefore(decreaseBtn, quantity);

    const increaseBtn = document.createElement("button");
    increaseBtn.classList.add("increase");

    increaseBtn.innerHTML = `<img src='images/chevron.svg' />`;

    increaseBtn.addEventListener("click", () => {
      setQuantity(dish, "inc");
    });

    quantityWrapper.appendChild(increaseBtn);

    const setQuantity = (dish, operation, cartSummary) => {
      if (operation === "dec") {
        dish.count--;

        if (!dish.count) {
          cartSummary.removeChild(
            document.querySelector(`[data-name="${dish.name}"]`)
          );

          addBtn.classList.remove("in-cart");
          addBtn.classList.add("add");
          addBtn.innerText = "Add to Cart";
        }
      } else {
        dish.count++;
      }

      quantity.innerText = dish.count;
      plateQuantity.innerHTML = dish.count;
      subtotal.innerText = this.setDisplayPrice(dish.count * dish.price);
      this.setCartTotal();
    };

    const subtotal = document.createElement("div");
    subtotal.classList.add("subtotal");
    subtotal.innerText = this.setDisplayPrice(dish.count * dish.price);

    listItem.appendChild(subtotal);

    cartSummary.appendChild(listItem);

    this.setCartTotal();
  }

  setCartTotal() {
    const dishInCart = menuItems.filter((dish) => dish.count !== 0);
    const billSubtotal = document.querySelectorAll(".amount.price.subtotal");
    const billTax = document.querySelectorAll(".amount.price.tax");
    const billTotal = document.querySelectorAll(".amount.price.total");

    if (!dishInCart.length) {
      billSubtotal[0].innerText = "$0.00";
      billTax[0].innerText = "$0.00";
      billTotal[0].innerText = "$0.00";

      return;
    }

    const subTotal = dishInCart
      .map((dish) => dish.count * dish.price)
      .reduce((a, b) => a + b);

    const tax = Math.floor(subTotal * 0.0975);

    const total = subTotal + tax;

    billSubtotal[0].innerText = this.setDisplayPrice(subTotal);

    billTax[0].innerText = this.setDisplayPrice(tax);

    billTotal[0].innerText = this.setDisplayPrice(total);
  }
}

const restaurant = new Restaurant(menuItems);

restaurant.initMenu();
