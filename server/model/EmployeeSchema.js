const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "isim zorunlu"],
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:[true, "email zorunlu"],
        unique:true,
        index:true,
    },
    age: {
        type: Number,
        required: [true, "yaş zorunlu"]
    },
    mobile:{
        type:String,
        required:[true," telefon zorunlu"],
        unique:true,
        index:true,
    }
});

//Export the model
module.exports = mongoose.model('Employee', EmployeeSchema);