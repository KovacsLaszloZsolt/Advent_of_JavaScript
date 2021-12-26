const data = [
  {
    id: 1,
    name: "Cameron Williamson",
    email: "cameron.wiliamson@example.com",
    title: "Software Developer",
  },
  {
    id: 2,
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    title: "Project Manager",
  },
  {
    id: 3,
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    title: "Marketing Coordinator",
  },
  {
    id: 4,
    name: "Wade Warren",
    email: "wade.warren@example.com",
    title: "Software Tester",
  },
  {
    id: 5,
    name: "Esther Howard",
    email: "esther.howard@example.com",
    title: "Web Designer",
  },
  {
    id: 6,
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    title: "Marketing Coordinator",
  },
  {
    id: 7,
    name: "Esther Howard",
    email: "esther.howard@example.com",
    title: "Web Designer",
  },
  {
    id: 8,
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    title: "UI/UX Designer",
  },
  {
    id: 9,
    name: "Ralph Edwards",
    email: "ralph.edwards@example.com",
    title: "Software Tester",
  },
  {
    id: 10,
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    title: "Ethical Hacker",
  },
  {
    id: 11,
    name: "Willie Jennings",
    email: "willie.jennings@example.com",
    title: "Team Leader",
  },
  {
    id: 12,
    name: "Neveah Simmons",
    email: "neveah.simmons@example.com",
    title: "Team Leader",
  },
  {
    id: 13,
    name: "Theresa Webb",
    email: "theresa.webb@example.com",
    title: "Software Tester",
  },
  {
    id: 14,
    name: "Debbe Baker",
    email: "debbe.baker@example.com",
    title: "Software Developer",
  },
  {
    id: 15,
    name: "Ronald Richards",
    email: "ronald.richards@example.com",
    title: "Software Developer",
  },
  {
    id: 16,
    name: "Deanna Curtis",
    email: "deanna.curtis@example.com",
    title: "Scrum Master",
  },
  {
    id: 17,
    name: "Felicia Reid",
    email: "felicia.reed@example.com",
    title: "Ethical Hacker",
  },
  {
    id: 18,
    name: "Jessie Alexander",
    email: "jessie.alexander@example.com",
    title: "Project Manager",
  },
  {
    id: 19,
    name: "Sam Smith",
    email: "sam.smith@example.com",
    title: "Ethical Hacker",
  },
  {
    id: 20,
    name: "Eleanor Rigby",
    email: "eleanor.rigby@example.com",
    title: "UI/UX Designer",
  },
  {
    id: 21,
    name: "Devon Lane",
    email: "devon.lane@example.com",
    title: "Team Leader",
  },
  {
    id: 22,
    name: "Guy Hawkins",
    email: "guy.hawkins@example.com",
    title: "Team Leader",
  },
  {
    id: 23,
    name: "Jim Parks",
    email: "jim.parks@example.com",
    title: "Ethical Hacker",
  },
  {
    id: 24,
    name: "Susanne Ford",
    email: "susanne.ford@example.com",
    title: "Software Developer Manager",
  },
  {
    id: 25,
    name: "Kathryn Murphy",
    email: "kathryn.murphy@example.com",
    title: "Project Manager",
  },
  {
    id: 26,
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    title: "Software Developer",
  },
  {
    id: 27,
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    title: "Software Tester",
  },
  {
    id: 28,
    name: "Karen MacAfee",
    email: "karen.macafee@example.com",
    title: "UI/UX Designer",
  },
  {
    id: 29,
    name: "Dianne Russell",
    email: "dianne.russell@example.com",
    title: "Ethical Hacker",
  },
  {
    id: 30,
    name: "Bessie Cooper",
    email: "bessie.cooper@example.com",
    title: "Scrum Master",
  },
];

class Table {
  constructor(data) {
    this.data = data;
    this.currentPageNum = 1;
  }

  init() {
    // window.addEventListener("click", (e) => {
    //   console.log(e.target);
    // });
    const tBody = document.querySelector("tbody");
    this.data.slice(0, 10).forEach((element, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${element.id}</td>
      `;

      const nameInput = this.addInputTd(
        tr,
        {
          name: `person-name-${element.id}`,
          value: `${element.name}`,
        },
        "name"
      );

      const emailInput = this.addInputTd(tr, {
        name: `person-email-${element.id}`,
        value: `${element.email}`,
      });

      const titleInput = this.addInputTd(tr, {
        name: `person-title-${element.id}`,
        value: `${element.title}`,
      });
      tBody.appendChild(tr);

      const tdForBtns = document.createElement("td");
      const updateBtn = this.addBtn(
        tdForBtns,
        {
          class: "update",
          name: `person-update-${element.id}`,
          id: `personUpdate${element.id}`,
        },
        { src: "./images/update.svg", alt: "Update", class: "update" }
      );

      updateBtn.addEventListener("click", () => {
        const setChange = () => {
          if (this.data[index].name !== nameInput.value) {
            return nameInput.value;
          }
        };
        tr.classList.remove("edit");
        nameInput.disabled = true;
        emailInput.disabled = true;
        titleInput.disabled = true;

        this.data[index].name = this.data[index].email = emailInput.value;
        this.data[index].title = titleInput.value;
        console.log(this.data);
      });

      const editBtn = this.addBtn(
        tdForBtns,
        {
          class: "edit",
          name: `person-edit-${element.id}`,
          id: `personEdit${element.id}`,
        },
        { src: "./images/edit.svg", alt: "Edit", class: "edit" }
      );

      editBtn.addEventListener("click", () => {
        tr.classList.add("edit");
        nameInput.disabled = false;
        emailInput.disabled = false;
        titleInput.disabled = false;
      });
      tr.appendChild(tdForBtns);
    });

    const numOfResults = document.querySelector(".num-of-results");
    numOfResults.innerText = `${this.data.length} ${
      this.data.length <= 1 ? "result" : "results"
    }`;

    this.setPagination();

    const sortBtns = document.querySelectorAll(".sort");

    sortBtns.forEach((btn, index) =>
      btn.addEventListener("click", () => {
        const sortedByBtnIndex = [...sortBtns].findIndex(
          (btn) =>
            btn.classList.value.includes("descending") ||
            btn.classList.value.includes("ascending")
        );

        if (sortedByBtnIndex === index) {
          if (btn.classList.value.includes("ascending")) {
            btn.classList.remove("ascending");
            btn.classList.add("descending");
          } else {
            btn.classList.remove("descending");
            btn.classList.add("ascending");
          }
          this.data = this.data.reverse();
          this.setPageData(this.currentPageNum);
        } else {
          sortBtns[sortedByBtnIndex].classList.value = "sort";
          btn.classList.add("ascending");
          if (btn.dataset.category === "id") {
            this.data = this.data.sort((a, b) => a.id - b.id);
          } else {
            console.log(btn.dataset.category);
            this.data = this.data.sort((a, b) => {
              const aValue = a[btn.dataset.category].toUpperCase();
              const bValue = b[btn.dataset.category].toUpperCase();

              if (aValue < bValue) {
                return -1;
              }
              if (aValue > bValue) {
                return 1;
              }

              // names must be equal
              return 0;
            });
          }
          this.setPageData(this.currentPageNum);
        }
      })
    );
  }

  addInputTd(tr, inputObj, className) {
    const td = document.createElement("td");
    if (className) {
      td.classList.add(className);
    }

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("disabled", "disabled");
    input.setAttribute(
      `${Object.keys(inputObj)[0]}`,
      `${Object.values(inputObj)[0]}`
    );
    input.setAttribute(
      `${Object.keys(inputObj)[1]}`,
      `${Object.values(inputObj)[1]}`
    );
    td.appendChild(input);

    tr.appendChild(td);

    return input;
  }

  addBtn(td, btnObj, imgObj) {
    const setElemAtributes = (btn, obj) => {
      Object.entries(obj).forEach((elem) => {
        btn.setAttribute(elem[0], elem[1]);
      });
    };
    const button = document.createElement("button");
    setElemAtributes(button, btnObj);

    const img = document.createElement("img");

    setElemAtributes(img, imgObj);

    button.appendChild(img);

    td.appendChild(button);
    return button;
  }

  setPagination() {
    const prevPageBtn = document.querySelector(".previous");
    const nextPageBtn = document.querySelector(".next");
    const currentPageNum = document.querySelector("[name=currentPage]");
    const totalPages = document.querySelector("#totalPages");

    prevPageBtn.addEventListener("click", () => {
      if (currentPageNum.value > 1) {
        currentPageNum.value--;
      } else {
        currentPageNum.value = 1;
      }
      this.currentPageNum = currentPageNum.value;
      this.setPageData(this.currentPageNum);
    });

    const numOfPages = Math.ceil(this.data.length / 10);
    totalPages.innerText = numOfPages;

    nextPageBtn.addEventListener("click", () => {
      if (currentPageNum.value < numOfPages) {
        currentPageNum.value++;
      } else {
        currentPageNum.value = numOfPages;
      }
      this.currentPageNum = currentPageNum.value;
      this.setPageData(this.currentPageNum);
    });

    currentPageNum.addEventListener("blur", (e) => {
      if (e.target.value <= 1) {
        currentPageNum.value = 1;
        this.setPageData(currentPageNum.value);
      }

      if (e.target.value > 1 && e.target.value <= numOfPages) {
        this.setPageData(e.target.value);
      }

      if (e.target.value > numOfPages) {
        currentPageNum.value = numOfPages;
        this.setPageData(numOfPages);
      }
    });
  }

  setPageData(page) {
    const tRowS = document.querySelector("tbody").childNodes;
    this.data.slice(10 * (page - 1), 10 * page).forEach((rowData, i) => {
      tRowS[i].children[0].innerText = rowData.id;
      tRowS[i].children[1].children[0].value = rowData.name;
      tRowS[i].children[2].children[0].value = rowData.email;
      tRowS[i].children[3].children[0].value = rowData.title;
    });
  }
}

const newTable = new Table(data);
newTable.init();
