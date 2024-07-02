const express = require("express"),
path = require('path'),
app = express(),
staticFiles=require("./controllers/staticController.js"),
personController=require("./controllers/personController.js"),
mongoose = require("mongoose"),
layouts = require("express-ejs-layouts");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 //app.use(layouts);
app.use(express.static(path.join(__dirname, 'public')));

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");//önemli


//MONGOOSE BETTER FOR MVC STRUCTURE(BÜTÜN ELEMANLAR BELLİ BİR CLASS FORMATINDA DÜZEN İCİN)
mongoose.connect(
"mongodb://localhost:27017/antreman_template"
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
    });



    
app.listen(app.get("port"), () => {
    console.log(`The Express.js server has started and is listening
    ➥ on port number: ${app.get("port")}`);
    });