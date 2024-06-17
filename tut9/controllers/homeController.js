const express = require("express"),
path = require('path');


exports.sendReqParam = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
    };


    exports.formPostHandler=(req,res)=>{
        console.log(req.body.email);
        res.sendFile(path.join(__dirname ,"../views/post1response.html"));

    };

    exports.formGetHandler=(req,res)=>{
   
        res.sendFile(path.join(__dirname ,"../views/post1.html"));

    };


exports.mainMiddleware=(req,res,next)=>{

console.log("ilk middleware bu: "+req.url);
next();
};