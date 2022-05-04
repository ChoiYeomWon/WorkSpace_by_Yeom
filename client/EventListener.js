import { addButton, inputbox } from "./buildpage.js";
import TodoFunc from "./todo_parents.js";

inputbox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addButton.click();
  }
});

addButton.addEventListener("click", () => {
  const { todo, deleteButton, divText, completeButton } = TodoFunc();

  deleteButton.addEventListener("click", () => {
    todo.remove();
  });

  completeButton.addEventListener("click", () => {
    divText.style.color = "red";
  });

  divText.addEventListener("click", () => {
    const changeInput = document.createElement("input");
    changeInput.value = divText.innerText;
    todo.replaceChild(changeInput, divText);

    changeInput.addEventListener("keydown", async (event) => {
      if (event.key === "Enter") {
        divText.innerHTML = changeInput.value;
        todo.replaceChild(divText, changeInput);
      }
    });
  });
});
