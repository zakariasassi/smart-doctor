const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const User = new Schema({
    email : {
        type : String,
    },
    gender:{
        type : String,
    },
    age : {
        type : Number,
    },
    name : {
        type : String,
    },
    password : {
        type : String,
    },
});



module.exports = User;