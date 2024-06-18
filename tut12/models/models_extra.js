const mongoose = require("mongoose");
const User = require("./user");
const Subscriber = require("./subscriber");
const Course = require("./course");


exports.combineModelsExample=function(req,res){

    let testUser;
   

    const user1=User.create({
    name: {
    first: "Jon",
    last: "Wexler"
    },
    email: "jon@jonwexler.com",
    password: "pass123"
    })
    .then(user => {testUser =user ; return Promise.resolve("user created")})
    .catch(error => console.log(error.message));

   
    user1.then(()=>{  console.log(testUser); 
    Subscriber.findOne({
    email: testUser.email
    })
    .then(subscriber =>{

   console.log(subscriber)
     testUser.subscribedAccount=subscriber;
     
        testUser.save().then(user=>{User.populate(user, "subscribedAccount").then(user =>
            console.log(user)
            );});
        res.render("info",{user:testUser});
    }).catch(error=>console.log(error.message));
    });
}