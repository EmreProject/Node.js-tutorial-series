const mongoose = require("mongoose"),
subscriberSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
        },
        email: {
        type: String,
        required: true,
        lowercase: true,
        //unique: true
        },
        zipCode: {
        type: Number,
        min: [10000, "Zip code too short"],
        max: 99999
        }
});



subscriberSchema.methods.getInfo=function(){


    return `Name: ${this.name} Email: ${this.email} Zip Code:
    ➥ ${this.zipCode}`;

}

subscriberSchema.methods.findSameName = function() {
    return this.model("Subscriberrrr")
    .find({name: this.name})
   
    };

//collection ismi "Subscriberrrr" bunun lowercase ve prularal hali olur
module.exports = mongoose.model("Subscriberrrr", subscriberSchema);