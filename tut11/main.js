const express = require("express"),
path = require('path'),
app = express(),
layouts = require("express-ejs-layouts");

//https://www.mongodb.com/developer/products/mongodb/cheat-sheet/
//https://www.mongodb.com/resources/languages/mongodb-with-nodejs
//https://www.yusufsezer.com.tr/node-js-mongodb/   EN İYİSİ

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");//önemli


const MongoClient = require('mongodb').MongoClient;
const dbURL = 'mongodb://127.0.0.1:27017';
const dbName="recipe_db";
let client;


async function main() {
   
  
    try{

     client = await MongoClient.connect(dbURL);
    const db = client.db(dbName);
    const collection = await db.collection('contacts');
    
    //silme
    const deleteAll = await collection.deleteMany({});

    const result = await collection.insertOne({name: "Freddie Mercury",
        email: "fred@queen.com"
        });
    //console.log('Başarılı bir şekilde eklendi. InsertId: %s', result.insertedId);
    const result2 = await collection.insertOne({name: "Emr GG",
        email: "emre@king.com"
        });


//BU BÖYLE OLMALI YOKSA CLIENT CLOSE ERROR VERİYOR
// ALL WAYS: https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/cursor/
//one way
console.log("FIRST WAY TO READ");
    const allRes= collection.find({});
    for await (const doc of allRes) {
        console.log(doc);
      }

      //second way
      console.log("SECOND WAY TO READ");
      const allRes2= collection.find({});
      const allValues = await allRes2.toArray();
      allValues.forEach(item=>console.log(item));

      

    }catch(error) {
     console.error(error);   
    }finally{ 
        console.log("client is closed");
      
       client.close();
        }
}
main().catch(console.error);


app.listen(app.get("port"), () => {
    console.log(`The Express.js server has started and is listening
    ➥ on port number: ${app.get("port")}`);
    });