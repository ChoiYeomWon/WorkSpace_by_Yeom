import { TodoForm } from "./TodoForm.js";
import { TodoList } from "./TodoList.js";

let state = [
  {
    id: 1,
    text: "1번",
    completed: false,
    isUpdating: false,
  },
  {
    id: 2,
    text: "2번",
    completed: true,
    isUpdating: false,
  },
  {
    id: 3,
    text: "3번",
    completed: false,
    isUpdating: false,
  },
];

function setState(newState) {
  document.body.replaceChildren();
  document.body.append(...MakeApp(newState));
}

function handleAddClick(value) {
  state = state.concat({
    id: Math.random(),
    text: value,
    completed: false,
    isUpdating: false,
  }); // 수정
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

function MakeApp(state) {
  return [
    TodoForm({ onAddClick: handleAddClick }),
    TodoList({
      todos: state,
      onDeleteClick: handleDeleteClick,
      onCompleteClick: handleCompleteClick,
      onChangeClick: handleChangeClick,
    }),
  ];
}

//나중에 이거 삭제
document.body.append(...MakeApp(state));
