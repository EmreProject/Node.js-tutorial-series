const mongoose = require("mongoose"),
{Schema} = mongoose,
userSchema = new Schema({
name: {
first: {
type: String,
trim: true
},
last: {
type: String,
trim: true
}
},
email: {
type: String,
required: true,
lowercase: true,

},
courses: [{type: Schema.Types.ObjectId, ref: "Course_antreman1"}],
subscribedAccount: {type: Schema.Types.ObjectId, ref:"Subscriber_antreman1"}
}, {
timestamps: true //Add a timestamps property to record createdAt and updatedAt dates.
});

userSchema.virtual("fullName").get(function() {
return `${this.name.first} ${this.name.last}`;
});//diger propertyler gibi ama databse kaydedilmiyor


module.exports = mongoose.model("UserTut13", userSchema);