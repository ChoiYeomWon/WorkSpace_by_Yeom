import { Button } from "./Button.js";
import { Input } from "./input.js";

export function TodoForm({ onAddClick }) {
  const element = document.createElement("div");
  const input = Input();
  element.append(
    input,
    Button("추가", () => onAddClick(input.value))
  );

  return element;
}
