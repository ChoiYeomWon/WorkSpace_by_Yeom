import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/todos", (req, res) => {
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
  const id = parseInt(req.params.id);
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
  console.log(newTodo);
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
  console.log("Server is running");
});

// app.use((req, res, next) => {
//   res.setHeader("dskdksadksad", "yeom");
//   next();
// });
