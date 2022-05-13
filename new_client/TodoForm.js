import { Button } from "./Button.js";
import { Input } from "./input.js";

export function TodoForm({ onAddClick, onAddFormChange }) {
  const element = document.createElement("div");
  const input = Input({ id: "#input", onChange: onAddFormChange });
  element.append(
    input,
    Button("추가", () => onAddClick(input.value))
  );
  return element;
}
