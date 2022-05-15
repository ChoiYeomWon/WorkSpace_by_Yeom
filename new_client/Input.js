export function Input({ value, onChange, onClick }) {
  const element = document.createElement("input");
  element.autofocus = true;
  element.addEventListener("keyup", onChange);
  element.addEventListener("click", onClick);
  element.value = value ? value : "";
  return element;
}
