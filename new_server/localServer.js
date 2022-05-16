import express from "express";
import cors from "cors";
import { deleteTodo, getAllTodos, makeTodo, putTodo } from "./database.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/todos", (req, res) => {
  const allTodos = getAllTodos();
  res.send(allTodos);
});

app.post("/todos", (req, res) => {
  if (!validateData(req)) return res.status(400).send();
  const returnTodo = makeTodo(req.body);
  res.send(returnTodo);
});

app.put("/todos/:id", (req, res) => {
  if (!validateData(req)) return res.status(400).send();
  const id = parseInt(req.params.id);
  const returnTodo = putTodo({
    id,
    text: req.body.text,
    completed: req.body.completed,
  });
  res.send(returnTodo);
});

app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  deleteTodo(id);
  res.send("ok!");
});

function validateData(data) {
  if (
    !data.body ||
    typeof data.body.text !== "string" ||
    typeof data.body.completed !== "boolean"
  ) {
    return false;
  } else return true;
}

app.listen(4000, () => {
  console.log("Server is running");
});

// function validateData(v, data) {
//   const result = {};
//   let error = null;

//   Object.entries(v).forEach(([key, value]) => {
//     if (data[key] === null || data[key] === undefined) error = "Not Exist";
//     else if (typeof data[key] !== v[key].type) error = "Type Error";
//     else {
//       result[key] = data[key];
//     }
//   });

//   return { result: error ? null : result, error };
// }
