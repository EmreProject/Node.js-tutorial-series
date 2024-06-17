const port = 3000,
express = require("express"),
path = require('path'),
app = express(),
homeController = require("./controllers/homeController");


//for req.body to post
app.use(
    express.urlencoded({
    extended: false
    })
    );
    app.use(express.json());




app.use(homeController.mainMiddleware);
app.post("/form",homeController.formPostHandler);
app.get("/items/:vegetable", homeController.sendReqParam);
app.get("/form",homeController.formGetHandler);


app.listen(port, () => {
    console.log(`The Express.js server has started and is listening
    ➥ on port number: ${port}`);
    });
    
    