import { Badge } from "./Badge.js";

export function TodoProgress({ total, completed }) {
  const element = document.createElement("div");
  element.append(
    Badge("전체: " + total),
    Badge("  완료" + completed),
    Badge(`  미완료: ${total - completed}`)
  );
  return element;
}
