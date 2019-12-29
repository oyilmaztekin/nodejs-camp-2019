const express = require("express");
const app = express();
const mongoose = require("mongoose");
const http = require("http").createServer(app);
const userCreateRouter = require("./routes/createEmployee");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", userCreateRouter);

mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://localhost:27017/employees",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) {
      console.log(`DB bağlantı hatası ${err}`);
      return;
    }
    console.log("MongoDB'ye bağlantık.");
  }
);

const port = 5000;
http.listen(port, () =>
  console.log(`Server localhost:${port} üzerinde ayakta`)
);
