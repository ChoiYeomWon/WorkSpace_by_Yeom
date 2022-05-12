export function Input({ value, onChange }) {
  const element = document.createElement("input");
  element.addEventListener("keyup", onChange);
  element.value = value ? value : "";
  return element;
}
