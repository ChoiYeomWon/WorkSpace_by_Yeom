import { Button } from "./Button.js";
import { Input } from "./input.js";
import { Text } from "./Text.js";

export function Todo({
  id,
  isUpdating,
  text,
  completed,
  onDeleteClick,
  onCompleteClick,
  onChangeClick,
}) {
  const todo = document.createElement("li");
  todo.append(
    isUpdating === true
      ? Input(text)
      : Text({ text, completed, onClick: () => onChangeClick(id) }),
    Button("삭제", () => onDeleteClick(id)),
    Button("완료 후 체크", () => onCompleteClick(id))
  );
  return todo;
}