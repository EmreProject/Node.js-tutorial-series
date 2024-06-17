//extra by myself with es6 modules
import http from "http"
import httpStatus from "http-status-codes"
import {gg1 as es6Hello} from "./es6export.js"
import fs from "fs"

console.log(fs);

const port = 3000,
app = http.createServer();

es6Hello();


//json to string
const getJSONString = obj => {
    return JSON.stringify(obj, null, 2);
    };


    const routeResponseMap = {
        "/info": "<h1>Info Page</h1>",
        "/contact": "<h1>Contact Us</h1>",
        "/about": "<h1>Learn More About Us.</h1>",
        "/hello": "<h1>Say hello by emailing us here</h1>",
        "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
        };

app.on("request", (req, res) => {

    //for post method to test it open new terminal without closing webserver and write  "curl --data "username=Jon&password=secret" http://localhost:3000"
    
    let body=[];
    req.on("data", (bodyData) => {
        body.push(bodyData);
        });
    
    req.on("end", () => {
        body = Buffer.concat(body).toString();
        console.log(`Request Body Contents: ${body}`);
        });
        //...

res.writeHead(httpStatus.OK, {
"Content-Type": "text/html"
}); //zorunlu degil

console.log("------");
console.log(getJSONString(req.method));
console.log("------");
console.log(getJSONString(req.url)); //   / bu döner
console.log("------");
console.log(getJSONString(req.headers));

if(routeResponseMap[req.url]){
 
    setTimeout(() => res.end(routeResponseMap[req.url]), 2000); //for delaying if response is too heavy to wait to load

}else{

let responseMessage = "<h1>This will show on the screen.</h1>"; //res.write seklinde de olabilir
res.write(responseMessage);
res.end();
}
});
app.listen(port);
console.log(`The server has started and is listening on port number:
➥ ${port}`);