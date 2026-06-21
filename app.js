const http = require("http");

http.createServer((req, res) => {
  res.end("CI/CD Lab Working");
}).listen(3000);

console.log("Server started on 3000");
