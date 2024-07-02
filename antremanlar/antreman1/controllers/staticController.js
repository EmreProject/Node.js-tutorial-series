const express = require("express"),
path = require('path'),
app = express();

exports.cssIndexPage=(req,res)=>{
  
    res.sendFile(path.join(__dirname ,"../public/css/style.css"));


};

exports.indexPage=(req,res)=>{
  
    res.sendFile(path.join(__dirname ,"../public/html/index.html"));


};