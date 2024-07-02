const path = require('path');

const rootFolder={
root: path.join(__dirname,"../public")
};


function indexPageView(req,res){

//res.sendFile("/html/index.html",rootFolder); baska yol
res.sendFile("/html/index.html",{root:"./public"}); //root a main.js ye göre relative path yaz!!!! main js controllers degil!!!!

}


module.exports={

indexPageView,


};