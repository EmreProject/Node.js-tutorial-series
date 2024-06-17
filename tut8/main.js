const port = 3000,
express = require("express"),
path = require('path'),
app = express();

//expressin post isteklerinde req.body kullanmamızı saglayan middleware funcı
app.use(
    express.urlencoded({
    extended: false
    })
    );
    app.use(express.json());
   

//middleware func ilk bu
app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
    });

//ikinci middelware func olarak ikinci bu calısır
    app.use((req, res, next) => {
        console.log(`ikinci middleware`);
        next();
        });


  //sadece belli pathe özel /items ile baslayanlar!
  app.use("/items",(req, res, next) => {
    console.log(`/itemse özel`);
    next();
    });     




app.get("/", (req, res) => {
console.log(req.params);
console.log(req.body);
console.log(req.url);
//query strings
console.log(req.query); //url deki http://localhost:3000/?name=emre&age=25&pagevisited=4 gibi
console.log(req.query?.name); //üstteki örnek linke göre emre yazar
res.sendFile(  path.join(__dirname ,"views/index.html"));
});

app.get("/items/:vegetable", (req, res) => {
    console.log("get of vegetable");
    res.send(req.params.vegetable);
    });



app.post("/contact", (req, res) => {
    console.log("post of contact");
    res.send("Contact information submitted successfully.");
    });

    app.post("/", (req, res) => {
        console.log(req.body);
        console.log(req.body.email);
        console.log(req.query);
        res.send("POST Successful!");
        });

  


        


app.listen(port, () => {
console.log(`The Express.js server has started and is listening
➥ on port number: ${port}`);
});




/*
params
 Allows you to extract IDs and tokens from the URL. When you learn about
RESTful routes in unit 4, this request attribute allows you to identify which
items are being requested in an e-commerce site or what user profile you
should navigate to.


body 
Contains much of the contents of the request, which often includes data
coming from a POST request, such as a submitted form. From the request
body, you can collect information quickly and save it in a database.
url 
Provides information about the URL being visited (similar to req.url in
unit 1’s basic web server).
query 
Like body, lets you pull data being submitted to the application server. This
data isn’t necessarily from a POST request, however, and is often
requested in the URL as a query string.

*/



/*

Another way to collect data is through the URL parameters. Without the need for an
additional package, Express.js lets you collect values stored at the end of your URL’s
path, following a question mark (?). These values are called query strings, and they are
often used for tracking user activity on a site and storing temporary information about a
user’s visited pages.
Examine the following sample URL: http:// localhost:3000?cart=3&pagesVisited=
4&utmcode=837623. This URL might be passing information about the number of
items in a user’s shopping cart, the number of pages they’ve visited, and a marketing
code to let the site owners know how this user found your app in the first place.
To see these query strings on the server, add console.log(req.query); to your middleware
function in main.js. Now try visiting the same URL. You should see { cart: "3",
pagesVisited: "4", utmcode: "837623" } logged to your server’s console window.

*/