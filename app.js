const express = require("express");
const app = express();
const http = require("http");
const indexRouter = require("./routes/index");

app.use("/", indexRouter);

const server = http.createServer(app);
server.listen(3000, "127.0.0.1", () => {
  console.log("listening the port 127.0.0.1:3000")
}
);
