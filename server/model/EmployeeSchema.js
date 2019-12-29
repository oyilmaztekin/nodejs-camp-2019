const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  email: {
      type: String,
      required: [true, "email girilmesi zorunludur."],
      unique: true,
      index: true
  },
  age: {
      type: Number,
      required: [true, "yaş girmediniz"]
  },
  mobile: {
      type: String,
      unique: true
  }
});

module.exports = mongoose.model("Employee", EmployeeSchema);
