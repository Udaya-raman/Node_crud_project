const express = require('express');
const router = express.Router();
const studentController = require("../controllers/studentscontroller");
//view all records
router.get('/',studentController.view);

//Add New records
router.get('/adduser',studentController.adduser);
router.post('/adduser',studentController.save);

//Update records
router.get('/edituser/:id',studentController.edituser);
router.post('/edituser/:id',studentController.edit);

//Delete records
router.get('/deleteuser/:id',studentController.delete);
module.exports=router;