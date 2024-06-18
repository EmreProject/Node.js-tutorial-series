const { modelName } = require("../models/course");
const Subscriber = require("../models/subscriber"); //collection aslında
const userController=require("./usersController.js")

exports.getSubscriptionPage = (req, res) => {
    res.render("contact");
    };


exports.newSubscriber=function(name,email){

userController.usersArray().then(all=>{

all.forEach(a=>{
   
    if(a.email==email){
       
        Subscriber.create({
            name: name,
            email: email,
            zipCode: "12345"
            }).then(newsub=>{
                
            a.subscribedAccount=newsub;
            a.save();
           
        });

    }

});

});


}

    exports.saveSubscriber = async (req, res) => {
    
        let newSubscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email,
    zipCode: req.body.zipCode
    });

    newSubscriber.save().then((result)=> {
    res.render("thanks");
    }).catch(error=>console.log("errrorrr"));
    };


exports.getAllSubscribers = (req, res, next) => {

async function getAll(){
 try{
    const subscribers = await Subscriber.find(); //subscriber collectionı icindeki hepsi
    req.data1 = subscribers;
    next();
    }
    catch(error){
        next(error);
    }

}

getAll();

};

exports.deleteAll=async function(){

    try{

        const erased=await Subscriber.deleteMany({});
        console.log("all erased");
        }
        catch(error){

            console.log("error happened in error part.");

        }


}

exports.createRandomFromZero=async function(){


const eraseAll=await this.deleteAll();

 //FİRST WAY
 var subscriber1 = new Subscriber({
    name: "Jon Wexler",
    email: "jon@jonwexler.com"
    });
    subscriber1.save().then(oldu=>console.log(oldu)).catch(error=>console.log(error));

//second way
    Subscriber.create(
    {
    name: "Emre Wexler",
    email: "jon@jonwexler.com"
    }).then(
    savedDocument=>{
    
    console.log(savedDocument);
    }
    );


}


exports.findSameNameDene=function(req,res){

    Subscriber.create({
        name: "Emre Wexler",
        email: "jon@jonwexler2.com",
        zipCode: "12345"
        })
        .then(subscriber =>{

         console.log(subscriber);
         subscriber.findSameName().then(result=> res.send(`thanks ${result}`));
        
        });

      

}