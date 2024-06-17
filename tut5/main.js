const port=3000;
const http = require('http');
const httpStatus = require("http-status-codes");
const fs=require("fs");
const path=require("path");



const server = http.createServer();

//first way
const routeMap = {
    "/": "views/index.html",
    "/iki": "views/iki.html",
    "/clientdene.js":"views/clientdene.js",
    "/clientdene.json" : "views/clientdene.json"
    
    };
    

    //second way
    const getViewUrl = (url) => {
        if(url=="/"){
            return "views/index.html";
        }
        return `views${url}.html`;
        };


        function getFilePath(req){
            let filePath = path.join(__dirname, 'views', req === '/' ? 'index.html' : req);
       
    
        let extname = String(path.extname(filePath)).toLowerCase();
        let mimeTypes = {
            '.html': 'text/html',
            '.js': 'application/javascript',
            '.css': 'text/css',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.wav': 'audio/wav',
            '.mp4': 'video/mp4',
            '.woff': 'application/font-woff',
            '.ttf': 'application/font-ttf',
            '.eot': 'application/vnd.ms-fontobject',
            '.otf': 'application/font-otf',
            '.wasm': 'application/wasm'
        };

        let contentType = mimeTypes[extname] || 'application/octet-stream';

    

        return {type:contentType, path:filePath};
        }

    
  server.on("request", function(req, res){
   
console.log("Url: "+req.url);

    if(req.method=="GET") {

       const filePath= getFilePath(req.url);

  
      
        if(routeMap[req.url]){
        
            fs.readFile(filePath.path, (error, data) => {
                
                console.log(req.url);
                
                if (error) {
                console.log(error);
                }
            
                res.writeHead(200, { 'Content-Type': filePath.type });
                res.write(data);
                res.end();

                

                });

        }else{

            res.end("<h1>NO PAGE</h1>");
        }
    }else if (req.method === 'POST') {
            console.log("post calıstı");

            let body=[];
            req.on("data", (bodyData) => {
                body.push(bodyData);
               
                });
           
            if(req.url=="/postsayfa"){

                req.on("end",()=>{

                    body = Buffer.concat(body).toString();
                    body=JSON.parse(body);

                    body.name="EREN";

                    res.write(body);
                    res.end();
                });

            }else{

            
            req.on("end", () => {
                body = Buffer.concat(body).toString();
                console.log(`Request Body Contents: ${body}`);

                const arr=body.split("&");
                
                const htmlResult=[];
                arr.forEach(a=>{
                    const div=a.split("=");
                    htmlResult.push(`<h1>${div[0]}: ${div[1]}</h1>`);

                });

               

                res.write(`${htmlResult.join("\n")}`);//curl --data olanda olmazzz ama form vs ile olunca oluyor`);
                res.end("sonnnnnn");
                });
            }
        } 
    
});
server.listen(port);
console.log(`The server has started and is listening
➥ on port number: ${port}`);

