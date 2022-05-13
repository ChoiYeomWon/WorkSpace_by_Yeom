export function Button(text, onClick) {
  const button = document.createElement("button");
  button.innerText = text;
  button.onclick = onClick;
  return button;
}
