import { Button } from "./Button.js";
import { Input } from "./input.js";

export function TodoForm({ onAddClick, onAddFormChange }) {
  const element = document.createElement("div");
  element.append(
    Input({ onChange: onAddFormChange }),
    Button("추가", () => onAddClick(input.value))
  );
  return element;
}
