import { list } from "./buildpage.js";
import { inputbox, addButton } from "./buildpage.js";

export default function TodoFunc() {
  const todo = document.createElement("li");
  const deleteButton = document.createElement("button");
  const completeButton = document.createElement("button");
  const divText = document.createElement("span");
  deleteButton.innerText = "삭제";
  completeButton.innerText = "완료 후 체크";
  divText.innerHTML = inputbox.value;
  todo.append(divText, deleteButton, completeButton);
  list.append(todo);
  inputbox.value = "";
  return { todo, deleteButton, completeButton, divText };
}
