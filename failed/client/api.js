export async function getTodos() {
  const result = await fetch("http://localhost:4000/todos", {
    method: "GET",
  });
  return await result.json();
}

export async function postTodo(text) {
  const result = await fetch("http://localhost:4000/todos", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ text, completed: false }),
  });
  return await result.json();
}

export async function patchTodo(id, text, completed) {
  const result = await fetch("http://localhost:4000/todos/" + id, {
    headers: { "Content-Type": "application/json" },
    method: "PATCH",
    body: JSON.stringify({ text, completed }),
  });
  return await result.json();
}
