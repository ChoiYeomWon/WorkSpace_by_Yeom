import http from "http";

const server = http.createServer((request, response) => {
  request.on("data");
  response.setHeader("Content-Type", "text/html");
  response.end();
});

server.listen(4000, "127.0.0.1", () => {
  console.log("서버가 실행됨...");
});
