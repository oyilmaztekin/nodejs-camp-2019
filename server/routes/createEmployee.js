const express = require("express");
const router = express.Router();
const { CreateEmployee } = require("./../controller/EmployeeController");

router.post("/api/createEmployee", (req, res, next) => {
    const employee = CreateEmployee(req.body);
  employee.save()
    .then(employee => {
      return res.status(201).send({
        status: "success",
        data: employee
      });
    })
    .catch(err => {
      return res.status(400).send({
        status: "fail",
        data: { 
            error: err.message,
            errorMessage: "Girilen bilgileri tekrar kontrol edin."
         }
      });
    });
});

module.exports = router;
