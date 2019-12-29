const EmployeeSchema = require('./../model/EmployeeSchema');

function CreateEmployee(employee){
    return new EmployeeSchema({
        name: employee.name,
        email: employee.email,
        age: employee.age,
        mobile: employee.mobile
    });
}

module.exports.CreateEmployee = CreateEmployee;