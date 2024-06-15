const express = require('express');

const router = express.Router();


const UserController = require('../controller/UserController');


router.post('/sginup' , UserController.createUser)
router.post('/login' , UserController.loginUser)





module.exports = router ;