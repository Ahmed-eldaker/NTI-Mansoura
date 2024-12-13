// console.log(__filename);
// const fs = require("fs");
// const data = fs.readFile("data.json");

// module.exports = {
//   name: "test",
// };
// const { write } = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.write("GET request received");
  } else if (req.method === "POST") {
    res.write("POST request received");
  }
  res.end();
});
// server.on();
server.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
