import { postTodo } from "./api.js";
import { addButton, inputbox } from "./buildpage.js";
import { buttonListener } from "./buttonListener.js";
import TodoFunc from "./todo_parents.js";

inputbox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addButton.click();
  }
});

addButton.addEventListener("click", async () => {
  await postTodo(inputbox.value);
  const { todo, deleteButton, divText, completeButton } = TodoFunc(
    inputbox.value
  );
  inputbox.value = "";
  buttonListener(todo, deleteButton, completeButton, divText);
});
