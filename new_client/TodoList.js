import { Todo } from "./Todo.js";

export function TodoList({
  todos,
  onDeleteClick,
  onCompleteClick,
  onChangeClick,
}) {
  const element = document.createElement("ul");
  const todolist = todos.map(({ id, text, completed, isUpdating }) => {
    return Todo({
      id,
      isUpdating,
      text,
      completed,
      onDeleteClick,
      onCompleteClick,
      onChangeClick,
    });
  });
  element.append(...todolist);
  return element;
}
