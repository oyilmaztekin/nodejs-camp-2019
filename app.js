const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");
const http = require('http');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json()); // body-parser
app.use(express.urlencoded({ extended: false })); //body-parser

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);


const server = http.createServer(app);
server.listen(8080, "127.0.0.1", () =>
  console.log("listening the port 127.0.0.1:8080")
);
