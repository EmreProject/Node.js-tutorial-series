const express = require("express"),
path = require('path'),
app = express();



var courses = [
  {
  title: "Event Driven Cakes",
  cost: 50
  },
  {
  title: "Asynchronous Artichoke",
  cost: 25
  },
  {
  title: "Object Oriented Orange Juice",
  cost: 10
  }
  ];
 
exports.homePage=function(req,res){

res.render("index.ejs",{name:"Emre G."})

};
exports.showCourses = (req, res) => {
  res.locals.imgurl="/images/resim.jpg";
  console.log(req.query.name);
  console.log(req.url);
  res.render("courses", {
  offeredCourses: courses,
  
  });
  };

  exports.showSignUp = (req, res) => {
  res.render("contact");
  };
  exports.postedSignUpForm = (req, res) => {

    res.locals.name=req.body.name;
  res.render("thanks");
  };
