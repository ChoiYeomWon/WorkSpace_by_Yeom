export function Input(value) {
  const element = document.createElement("input");
  element.value = value ? value : "";
  return element;
}
