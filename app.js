const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questions.forEach((question, index) => {
  question.parentElement.addEventListener("click", () => {
    const li = question.parentElement.parentElement;

    if (li.classList.value.includes("expand")) {
      li.classList.remove("expand");
      question.classList.remove("expanded");
    } else {
      li.classList.add("expand");
      question.classList.add("expanded");
    }
  });
});
