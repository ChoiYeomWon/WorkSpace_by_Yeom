import { deleteTodo, getTodos, postTodo, putTodo } from "./RequestToServer.js";
import { TodoForm } from "./TodoForm.js";
import { TodoList } from "./TodoList.js";
import { TodoProgress } from "./TodoProgress.js";

let state = [];

function calculate(state) {
  const total = state.length;
  const completed = state.filter((com) => com.completed === true).length;
  return { total, completed };
}

function setState(newState) {
  document.body.replaceChildren(...MakeApp(newState));
}

async function handleAddClick(value) {
  state = state.concat(await postTodo(value));
  setState(state);
}

async function handleDeleteClick(id) {
  if ((await deleteTodo(id)) === true) {
    state = state.filter((hangman) => hangman.id !== id);
    setState(state);
  }
}

async function handleCompleteClick(id, text) {
  const returnPut = await putTodo({ id, text, completed: true });
  if (!returnPut) return;
  state = state.map((transition) =>
    transition.id === id
      ? {
          ...returnPut,
          isUpdating: transition.isUpdating,
        }
      : transition
  );
  setState(state);
}

function handleChangeClick(id) {
  state = state.map((todo) =>
    todo.id === id ? { ...todo, isUpdating: true } : todo
  );
  setState(state);
}

async function handleInputChange(e, id, completed) {
  if (e.key === "Enter") {
    const returnPut = await putTodo({ id, text: e.target.value, completed });
    state = state.map((todo) =>
      todo.id === id ? { ...returnPut, isUpdating: false } : todo
    );
    setState(state);
    return;
  }
}

async function handleAddFormChange(e) {
  const value = e.target.value;
  if (e.key === "Enter") {
    state = state.concat(await postTodo(value));
    setState(state);
  }
}

function MakeApp(state) {
  return [
    TodoForm({
      onAddClick: handleAddClick,
      onAddFormChange: handleAddFormChange,
    }),
    TodoProgress(calculate(state)),
    TodoList({
      todos: state,
      onDeleteClick: handleDeleteClick,
      onCompleteClick: handleCompleteClick,
      onChangeClick: handleChangeClick,
      onInputChange: handleInputChange,
    }),
  ];
}

state = await getTodos();
document.body.append(...MakeApp(state));
