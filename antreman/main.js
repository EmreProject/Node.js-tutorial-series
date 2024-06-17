const express = require("express"),
path = require('path'),
app = express(),
layouts = require("express-ejs-layouts"),
people= require("./controllers/peopleController"),
mongoose = require("mongoose");

  //collection ismi icin subscriber.js oku
  const person = require("./models/person")

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
"mongodb://localhost:27017/people_db"
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
    });


    app.get("/",people.getPersonAdd);
    app.post("/newperson",urlencodedParser,people.saveNewPerson);
   app.get("/searchpage",people.getPersonPage);
    app.post("/search",urlencodedParser,people.getPerson);

    
app.listen(app.get("port"), () => {
    console.log(`The Express.js server has started and is listening
    ➥ on port number: ${app.get("port")}`);
    });