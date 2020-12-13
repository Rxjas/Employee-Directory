const mongoose = require ('mongoose');

const EmployeeSchema = mongoose.Schema({
//time to setup properties for our employees

    name: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    employeeid: {
        type: Number,
        required: true
    }
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;