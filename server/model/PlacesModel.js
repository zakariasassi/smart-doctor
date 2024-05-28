const mongoose = require('mongoose');
const Places = require('../schema/Places');


const places = mongoose.model("Places" , Places );


module.exports = places;