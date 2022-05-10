import { getTodos } from "./api.js";
import { buttonListener } from "./buttonListener.js";
import TodoFunc from "./todo_parents.js";

export const list = document.createElement("ul");
const title = document.createElement("h1");
export const inputbox = document.createElement("input");
export const addButton = document.createElement("button");
addButton.innerText = "추가";
title.innerText = "리스트";

const defaultTodos = await getTodos();

list.append(title);

defaultTodos.forEach((todosa) => {
  const { todo, deleteButton, completeButton, divText } = TodoFunc(
    todosa.text,
    todosa.completed
  );
  buttonListener(todo, deleteButton, completeButton, divText);
});
