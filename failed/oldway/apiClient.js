let cur = 1;

let todos = [
  {
    id: 0,
    text: "default todo",
    completed: false,
  },
];

function createTodo({ text, completed }) {
  const data = {
    id: cur,
    text: text,
    completed: completed,
  };
  todos.push(data);
  cur += 1;
  console.log(todos);
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}

function deleteTodo(id) {
  const newTodo = todos.filter(function (todo) {
    if (todo.id === id) return false;
    return todo;
  });

  todos = newTodo;
  console.log(todos);
  return new Promise((resolve, reject) => {
    resolve(true);
  });
}

function changeTodo(id, { text, completed }) {
  const newTodo = todos.map((todo) => {
    if (todo.id === id)
      return {
        id,
        text: text ? text : todo.text, //todo 완료의 경우 text 값이 없음
        completed: completed ? completed : todo.completed, //todo 수정의 경우 completed 값이 없음
      };
    return todo;
  });
  todos = newTodo;
  console.log(todos);
  return new Promise((resolve, reject) => {
    resolve(true);
  });
}

const apiClient = {
  createTodo,
  deleteTodo,
  changeTodo,
};

export default apiClient;
