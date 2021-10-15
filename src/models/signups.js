const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   FullName : {
        type:String,
        required:true
    },

Address : {

    type:String,
    required:true
},

MobileNo : {
    type:Number,
    required:true,
    unique:true
},

DOB : {
    type:Number,
    required:true
},
emailid : {
    type:String,
    required:true,
    unique:true
},
gender : {
    type:String,
    required:true
},
username : {
    type:String,
    required:true,
    unique:true
},
password : {
    type:String,
    required:true
},



})

// This is the collection

const Get = new mongoose.model("Signup", userSchema );

module.exports = Get;