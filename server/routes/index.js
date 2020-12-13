const router = require('express').Router();
const employees = require('./employee.routes');

//api/employee
router.use('/api/employee', employees);

module.exports = router;