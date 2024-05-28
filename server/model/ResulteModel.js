const mongoose = require('mongoose');
const Resulte = require('../schema/Resulte');


const resulte = mongoose.model("Resulte" , Resulte );


module.exports = resulte;