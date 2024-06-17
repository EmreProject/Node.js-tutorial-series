
const express = require("express"),
path = require('path'),
app = express(),
homeController = require("./controllers/homeController"),
errorController=require("./controllers/errorController")
layouts = require("express-ejs-layouts");


app.use(layouts);
app.use(express.static(path.join(__dirname, 'public'))); //mesela http://localhost:3000/html/baska.html gibi artık public klasöründeki her seye erisebiliyorum


app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");//önemli



app.get("/:name1",homeController.respondWithName);
app.get("/public/layout.css",homeController.sendCssLayout)
app.get("/baska/iki",homeController.sendBaskaPage)
app.get("/html/baska.html",homeController.denemeStatic)



//sonda olmalı!!!
app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);;


app.listen(app.get("port"), () => {
    console.log(`The Express.js server has started and is listening
    ➥ on port number: ${app.get("port")}`);
    });