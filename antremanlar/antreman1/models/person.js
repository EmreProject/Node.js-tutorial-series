const mongoose = require("mongoose"),
personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
        },
        age: {
        type: Number,
        required: true,
        }
});



personSchema.methods.getAll= function(){

const gg=async function(){

    const allPerson=await this.model("antremanPerson1").find();
    console.log(allPerson)
    return allPerson;
}

return gg.call(this);

}

/*
subscriberSchema.methods.findSameName = function() {
    return this.model("antremanPerson1")
    .find({name: this.name});
   
    };
    */

//collection ismi "Subscriberrrr" bunun lowercase ve prularal hali olur
module.exports = mongoose.model("antremanPerson1", personSchema);