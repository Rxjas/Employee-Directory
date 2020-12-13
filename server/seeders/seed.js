let mongoose = require("mongoose");
let db = require("../models");

//connect to the db to populate it with employees
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/employee_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

let employeeSeed = [
    {
        name: 'Bill',
        title: 'Manager',
        email: 'bill123@123.com',
        employeeid: 2
    },
    {
        name: 'Zach',
        title: 'Assistant to the Manager',
        email: 'zach123@123.com',
        employeeid: 3
    },
    {
        name: 'Isabella',
        title: 'Developer',
        email: 'isabella123@123.com',
        employeeid: 4
    },
    {
        name: 'Jane',
        title: 'Developer',
        email: 'jane123@123.com',
        employeeid: 5
    },
    {
        name: 'Lauren',
        title: 'Developer',
        email: 'lauren123@123.com',
        employeeid: 6
    },
    {
        name: 'Tim',
        title: 'Junior-Developer',
        email: 'tim123@123.com',
        employeeid: 7
    },
    {
        name: 'Aika',
        title: 'Junior-Developer',
        email: 'aika123@123.com',
        employeeid: 8
    }
];//end of employee seed

db.Employee.deleteMany({})
  .then(() => db.Employee.collection.insertMany(employeeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
