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

function handleAddClick(value) {
  state = state.concat({
    id: 
    text: value,
    completed: false,
    isUpdating: false,
  });
  setState(state);
}

function handleDeleteClick(id) {
  state = state.filter((hangman) => hangman.id !== id);
  setState(state);
}

function handleCompleteClick(id) {
  state = state.map((transition) =>
    transition.id === id
      ? {
          id: transition.id,
          text: transition.text,
          completed: true,
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

function handleInputChange(e, id) {
  if (e.key === "Enter") {
    state = state.map((todo) =>
      todo.id === id
        ? { ...todo, text: e.target.value, isUpdating: false }
        : todo
    );
    setState(state);
    return;
  }
}

function handleAddFormChange(e) {
  const value = e.target.value;
  if (e.key === "Enter") {
    state = state.concat({
      id: Math.random(),
      text: value,
      completed: false,
      isUpdating: false,
    });
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

//나중에 이거 삭제
document.body.append(...MakeApp(state));
