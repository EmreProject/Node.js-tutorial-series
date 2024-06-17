const mongoose = require("mongoose"),
subscriberSchema = mongoose.Schema({
name: String,
email: String,
zipCode: Number
});

//collection ismi "Subscriberrrr" bunun lowercase ve prularal hali olur
module.exports = mongoose.model("Subscriberrrr", subscriberSchema);