const EmployeeSchema = require("../model/EmployeeSchema");

function createUser(user) {
  return new EmployeeSchema({
    name: user.name,
    email: user.email,
    mobile: user.mobile
  });
}

module.exports.createUser = createUser;
