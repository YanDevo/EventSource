const mongoose = require("mongoose");

//get an instance of the mongoose schema
const Schema = mongoose.Schema;

// create ne schema for user in mongoDb
const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
})


//create a odel from the schema and export it
module.exports = mongoose.model('user', userSchema , 'Users' )