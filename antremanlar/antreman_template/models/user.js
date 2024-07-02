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
zipCode: {
type: Number,
min: [1000, "Zip code too short"],
max: 99999
},
password: {
type: String,
required: true
},
courses: [{type: Schema.Types.ObjectId, ref: "CourseTut13"}],
subscribedAccount: {type: Schema.Types.ObjectId, ref:"SubscriberTut13"}
}, {
timestamps: true //Add a timestamps property to record createdAt and updatedAt dates.
});

userSchema.virtual("fullName").get(function() {
return `${this.name.first} ${this.name.last}`;
});//diger propertyler gibi ama databse kaydedilmiyor


module.exports = mongoose.model("UserTut13", userSchema);