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
  const returnTodo = makeTodo(req.body); // 클라이언트에서 생성 시 id 값 제외
  res.send(returnTodo);
});

app.put("/todos/:id", (req, res) => {
  if (!validateData(req)) return res.status(400).send();
  const id = parseInt(req.params.id); //id 가져오기, id 값 정수 변환
  const returnTodo = putTodo({
    id,
    text: req.body.text,
    completed: req.body.completed, // 클라이언트에서 수정 시 completed 추가하기
  });
  res.send(returnTodo);
});

app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  deleteTodo(id);
  res.send("ok!");
}); // 삭제 시 클라이언트 서버 각각 서로 삭제하면 끝.

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
