import { list } from "./buildpage.js";

export default function TodoFunc(IV, CP) {
  const todo = document.createElement("li");
  const deleteButton = document.createElement("button");
  const completeButton = document.createElement("button");
  const divText = document.createElement("span");
  deleteButton.innerText = "삭제";
  completeButton.innerText = "완료 후 체크";
  divText.innerHTML = IV;
  if (CP === true) {
    divText.style.color = "red";
  }
  todo.append(divText, deleteButton, completeButton);
  list.append(todo);
  return { todo, deleteButton, completeButton, divText };
}
