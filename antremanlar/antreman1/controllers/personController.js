const personModel = require("../models/person.js");

exports.createPerson=function(req,res){

    personModel.create( {
        name:req.body.name,
        age:req.body.age
        }).then(  async ()=>{

            const randomPer=await personModel.findOne();
            console.log(randomPer);
            randomPer.getAll().then(a=>console.log(a));

        });

      


        res.send("thanks!!!")
}




/*
exports.usersArray=function(){


    return User.find();
}

exports.getAllUsers = (req, res, next) => {

    async function getAll(){
     try{
        const users = await User.find(); //subscriber collectionı icindeki hepsi
        req.data1 = users;
        next();
        }
        catch(error){
            next(error);
        }
    
    }
    
    getAll();
    
    };
    */