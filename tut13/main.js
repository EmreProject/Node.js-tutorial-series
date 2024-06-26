const express = require("express"),
path = require('path'),
app = express(),
layouts = require("express-ejs-layouts"),
mongoose = require("mongoose"),
homeController=require("./controllers/homeController"),usersController = require("./controllers/usersController");



  //collection ismi icin subscriber.js oku
  const Subscriber = require("./models/subscriber")

  //for using req.body... for reading post data
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
///

  //app.use(layouts);
  app.use(express.static(path.join(__dirname, 'public')));
  


app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");//önemli


//MONGOOSE BETTER FOR MVC STRUCTURE(BÜTÜN ELEMANLAR BELLİ BİR CLASS FORMATINDA DÜZEN İCİN)
mongoose.connect(
"mongodb://localhost:27017/tut13_db"
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
    });

    const userRouter = require("./routes/userRoutes.js");
    app.use("/users", userRouter);

app.listen(app.get("port"), () => {
    console.log(`The Express.js server has started and is listening
    ➥ on port number: ${app.get("port")}`);
    });