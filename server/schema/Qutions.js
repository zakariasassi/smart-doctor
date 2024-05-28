const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Qutions = new Schema({
    qution : {
        type : String,
    },
    placeID : {
        type : String,
    },

});



module.exports = Qutions;