import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

function All() {
  const state = [
    {
      id: 0,
      text: "default todo",
      completed: false,
    },
  ];

  return (
    <div>
      <TodoList todos={state} />
      <TodoForm />
    </div>
  );
}

document.append(<All />);
