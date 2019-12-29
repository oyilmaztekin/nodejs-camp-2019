const express = require("express");
const router = express.Router();
const { createUser } = require("./../controller/createUser");

router.post("/createUser", async ({ body, requestTime }, res, next) => {
  const newUser = createUser(body);
    newUser
      .save()
      .then(item => res.status(200).send({
          status: "success",
          reqTime: requestTime,
          data: item
        }))
      .catch(err => {
          next()
          return res.status(401).send({ 
            status: "fail",
            reqTime: requestTime,
              error : err.message
             });
    });
});

module.exports = router;
