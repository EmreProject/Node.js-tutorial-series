const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes"),
router = require("./router"),
contentTypes = require("./contentTypes"),
utils = require("./utils");

router.get("/",(req,res)=>{

    console.log("cureent path: "+__dirname);
    res.writeHead(httpStatus.OK, contentTypes.htm);
    utils.getFile("views/index.html", res);

});

router.get("/",(req,res)=>{

    console.log("cureent path: "+__dirname);
    res.writeHead(httpStatus.OK, contentTypes.htm);
    utils.getFile("views/index.html", res);

});


router.post("/thanks.html",(req,res)=>{

    let body=[];
            req.on("data", (bodyData) => {
                body.push(bodyData);
               
                });
           
        
                req.on("end",()=>{

                    body = Buffer.concat(body).toString();
                   
                   console.log("result: "+body);
                });
            
                utils.getFile("views/thanks.html",res);
            
});



router.get("/resim",(req,res)=>{

    
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/small_w_1200.jpg", res);

});



router.get("/courses.html",(req,res)=>{

    console.log("cureent path: "+__dirname);
    //res.writeHead(httpStatus.OK, contentTypes.htm);
    utils.getFile("views/courses.html", res);

});


router.get("/index.css",(req,res)=>{


   // res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/index.css", res);

});


router.get("/confettiCuisine.js",(req,res)=>{

   
   // res.writeHead(httpStatus.OK, contentTypes.js);
    utils.getFile("public/js/confettiCuisine.js", res);

});


http.createServer(router.handle).listen(port);
console.log(`The server is listening on
➥ port number: ${port}`);