const express = require("express"),
path = require('path'),
app = express();

exports.sendCssIndex=(req,res)=>{
  
    res.sendFile(path.join(__dirname ,"../public/css/style.css"));


};

exports.sendCssLayout=(req,res)=>{

 
 const path1= path.join(__dirname,"errorController.js");
 console.log(path1);
    //res.sendFile(path.join(__dirname ,"../public/css/layout.css"));  //BİRİNCİ YOL

//ikinci yol
    res.sendFile("./public/css/layout.css",{
      root: path.join(__dirname, '..')
      });


      res.sendFile("./public/css/layout.css",{
        root: path.join(__dirname, '..')
        });

};

exports.sendBaskaPage=function(req,res){

  res.render("another.ejs");

};

exports.denemeStatic=function(req,res){

  console.log("bu calıstı not static");
  res.sendFile(path.join(__dirname, '../public/html/baska.html'));

}

exports.respondWithName=function(req,res){
let nam=req.params.name1;
console.log(nam,req.url);
res.render("index",{name2:nam}); //if the file is ejs and within views folder it is ok

};