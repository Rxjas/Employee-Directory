//We are not creating an employees, or deleting them 
//so not post, put or delete routes needed

const router = require('express').Router();
const { Employee } = require('../models');

//RESTful api
//api/employee
router.route('/').get((req, res) => {
    Employee.find({})
        .then(data => {
            res.json({ success: true, data});
        })
        .catch(err => {
            console.log(err);
            res.json({ success: false});
        })
});


//api/employee/name
router.route('/name').get((req, res) => {
    Employee.find({}).sort( { name: 1 } )
        .then(data => {
            res.json({ success: true, data});
        })
        .catch(err => {
            res.json({ success:true, data})
        })
});

//api/employee/number
router.route('/number').get((req, res) => {
    Employee.find({}).sort( { employeeid: 1 } )
        .then(data => {
            res.json({ success: true, data});
        })
        .catch(err => {
            res.json({ success:true, data})
        })
});


