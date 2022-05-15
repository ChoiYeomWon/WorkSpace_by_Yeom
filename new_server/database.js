let todos = [
  {
    id: parseInt((Math.random() * 1000) % 999),
    text: "default todo",
    completed: false,
  },
];

export function makeTodo({ text, completed }) {
  const data = { id: parseInt((Math.random() * 1000) % 999), text, completed };
  todos.push(data);
  return data;
  //나중에 id 값 생성 시 중복 검사
}

export function putTodo({ id, text, completed }) {
  todos = todos.map((pTodo) => {
    if (pTodo.id === id) {
      return {
        id,
        text,
        completed,
      };
    }
    return pTodo;
  });
}

export function deleteTodo(id) {
  const newTodo = todos.filter((todo) => {
    if (todo.id === id) return false;
    return todo;
  });
  todos = newTodo;
}

export function getAllTodos() {
  return todos;
}
