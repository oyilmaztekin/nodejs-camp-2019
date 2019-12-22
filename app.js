const express = require("express");
const indexRouter = require("./routes/index");
const http = require('http');
const app = express();



app.use('/', indexRouter);


const server = http.createServer(app);
server.listen(8080, "127.0.0.1", () =>
  console.log("listening the port 127.0.0.1:8080")
);
