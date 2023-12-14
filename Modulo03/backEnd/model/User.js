const mongoose = require("mongoose");

const User = mongoose.model("User", 
{ 
    username: String, 
    fullname: String,
    age: Number,
    email: String,
    password: String

});

module.exports = User