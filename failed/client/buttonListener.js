import { patchTodo } from "./api";

export function buttonListener(todo, deleteButton, completeButton, divText) {
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
        await patchTodo(); // 여기부터 수정, id 값을 클라이언트가 받아온 후 실행 되어야 함.
        divText.innerHTML = changeInput.value;
        todo.replaceChild(divText, changeInput);
      }
    });
  });
}
