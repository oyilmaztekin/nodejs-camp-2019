const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/", async (req, res, next) => {
  fetch("http://localhost:5000/api/userList")
    .then(res => res.json())
    .then(data => {
      res.send(data);
    })
    .catch(err => res.send("birşeyler ters gitti"));
});

module.exports = router;
