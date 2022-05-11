export function Text({ text, completed, onClick }) {
  const element = document.createElement("span");
  element.innerText = text;
  element.addEventListener("click", onClick);
  if (completed === true) element.style.color = "red";
  return element;
}
