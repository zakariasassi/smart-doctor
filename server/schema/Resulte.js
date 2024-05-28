const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Resulte = new Schema({
    description : {
        type : String,
    },
    qutionID : {
        type : String
    } 
});



module.exports = Resulte;