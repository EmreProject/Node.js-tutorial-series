const mongoose = require("mongoose"),
personScheme = mongoose.Schema({
name: String,
age:Number,
hobbys:Array
});

//collection ismi "Subscriberrrr" bunun lowercase ve prularal hali olur
module.exports = mongoose.model("People", personScheme);