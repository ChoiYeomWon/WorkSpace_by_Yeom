import apiClient from "./apiClient.js";
import { list } from "./todolist.js";

export const inputbox = document.createElement("input");
export const addButton = document.createElement("button");

addButton.innerText = "추가";

inputbox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addButton.click();
  }
});

addButton.addEventListener("click", async () => {
  try {
    const createdTodo = await apiClient.createTodo({
      text: inputbox.value,
      completed: false,
    });
    const todo = document.createElement("li");
    const deleteButton = document.createElement("button");
    const completeButton = document.createElement("button");
    const divText = document.createElement("span");
    deleteButton.innerText = "삭제";
    completeButton.innerText = "완료 후 체크";
    divText.innerHTML = createdTodo.id + inputbox.value;
    todo.append(divText, deleteButton, completeButton);
    list.append(todo);
    inputbox.value = "";
    // 여기까지 생성

    deleteButton.addEventListener("click", async () => {
      try {
        await apiClient.deleteTodo(createdTodo.id);
        todo.remove();
      } catch (error) {}
    });

    completeButton.addEventListener("click", async () => {
      try {
        await apiClient.changeTodo(createdTodo.id, { completed: true });
        divText.style.color = "red";
      } catch (error) {}
    });

    divText.addEventListener("click", () => {
      const changeInput = document.createElement("input");
      changeInput.value = divText.innerText;
      todo.replaceChild(changeInput, divText);

      changeInput.addEventListener("keydown", async (event) => {
        if (event.key === "Enter") {
          try {
            await apiClient.changeTodo(createdTodo.id, {
              text: changeInput.value,
            });
            divText.innerHTML = createdTodo.id + changeInput.value;
            todo.replaceChild(divText, changeInput);
          } catch (error) {}
        }
      });
    });
  } catch (error) {}
});
