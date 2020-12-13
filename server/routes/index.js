const router = require('express').Router();
const employees = require('./employee.routes');

//api/employee
router.use('/api/todo', employees);

module.exports = router;