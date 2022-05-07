import express from "express";

const app = express();
app.use(express.json());
let cur = 1;
let todos = [
  {
    id: 0,
    text: "default todo",
    completed: false,
  },
];

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/todos", (req, res) => {
  console.log(req.body);
  if (!req.body || !req.body.text || typeof req.body.completed !== "boolean") {
    console.log("error");
    return res.status(400).send("Validation Error: asd");
  }
  const { text, completed } = req.body;
  const todo = { id: cur, text, completed };

  todos.push(todo);
  cur += 1;
  res.send(todo);
});

app.patch("/todos/:id", (req, res) => {
  const rqTodo = req.body;
  const id = req.params.id;
  if (!rqTodo) {
    console.log("validation error");
    return res.status(400).send("검증 오류");
  }
  const newTodo = todos.map((todo) => {
    if (todo.id === id) {
      return {
        id: todo.id,
        text: rqTodo.text ? rqTodo.text : todo.text,
        completed:
          typeof rqTodo.completed === "boolean"
            ? rqTodo.completed
            : todo.completed,
      };
    }
    return todo;
  });
  todos = newTodo;
  res.send("잘 되었습니다");
});

app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const newTodo = todos.filter((todo) => {
    if (todo.id === id) return false;
    return todo;
  });
  todos = newTodo;
  res.send(todos);
});

app.get("/me", (req, res) => {
  res.send("me");
});

app.listen(4000, () => {
  console.log("port");
});

// app.use((req, res, next) => {
//   res.setHeader("dskdksadksad", "yeom");
//   next();
// });
