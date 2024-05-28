const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Places = new Schema({
    name : {
        type : String,
    },
    img : {
        type : String,
    },
});



module.exports = Places;