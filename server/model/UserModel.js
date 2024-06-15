const mongoose = require('mongoose');
const User = require('../schema/User');


const user = mongoose.model("User" , User );


module.exports = user;