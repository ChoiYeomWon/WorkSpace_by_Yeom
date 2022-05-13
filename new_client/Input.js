export function Input({ value, id, onChange, onClick }) {
  const element = document.createElement("input");
  element.id = id;
  element.addEventListener("keyup", onChange);
  element.addEventListener("click", onClick);
  element.value = value ? value : "";
  return element;
}
