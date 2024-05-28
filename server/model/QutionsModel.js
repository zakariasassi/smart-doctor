const mongoose = require('mongoose');
const Qutions = require('../schema/Qutions');


const qutions = mongoose.model("Qutions" , Qutions );


module.exports = qutions;