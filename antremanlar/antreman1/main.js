const express = require("express"),
path = require('path'),
app = express(),
staticFiles=require("./controllers/staticController.js"),
personController=require("./controllers/personController.js"),
mongoose = require("mongoose");


  //for using req.body... for reading post data
  var bodyParser = require('body-parser')
  const jsonParser = bodyParser.json();
  var urlencodedParser = bodyParser.urlencoded({ extended: false })
///

  //app.use(layouts);
  app.use(express.static(path.join(__dirname, 'public')));

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");//önemli


//MONGOOSE BETTER FOR MVC STRUCTURE(BÜTÜN ELEMANLAR BELLİ BİR CLASS FORMATINDA DÜZEN İCİN)
mongoose.connect(
"mongodb://localhost:27017/antreman1"
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
    });



app.get("/",staticFiles.indexPage);
app.get("/style.css",staticFiles.cssIndexPage);
 app.post("/newPerson",urlencodedParser,personController.createPerson);

    
app.listen(app.get("port"), () => {
    console.log(`The Express.js server has started and is listening
    ➥ on port number: ${app.get("port")}`);
    });