const express = require("express");
const router = express.Router();
const { createUser } = require("./../controller/createUser");

router.post("/createUser", async ({ body }, res, next) => {
  const newUser = createUser(body);
    newUser
      .save()
      .then(item => res.send(item))
      .catch(err => {
          next()
          return res.status(401).send({ error : err.message });
    });
});

module.exports = router;
