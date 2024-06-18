const User = require("../models/user.js");

exports.createUser=function(first,last,passwd,email,course){

    User.create( {
        name:{first:first,last:last},
        password:passwd,
        email:email,
        courses:[course]
        });

}

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