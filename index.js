const http = require("http");
const os = require("os");
const server = http.createServer((req, res) => {
  console.log(os.hostname());
  res.end();
});
server.listen(3000);
