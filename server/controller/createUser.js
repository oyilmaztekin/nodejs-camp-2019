const EmployeeSchema = require("../model/EmployeeSchema");

function createUser(user) {
  return new EmployeeSchema({
    name: user.name,
    email: user.email,
    age: user.age,
    mobile: user.mobile
  });
}

module.exports.createUser = createUser;
