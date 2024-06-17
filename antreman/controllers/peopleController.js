const Person = require("../models/person");



exports.getPersonAdd = (req, res) => {
    res.render("person");
    };


    exports.saveNewPerson = async (req, res) => {
    
        let newPerson = new Person({
    name: req.body.name,
    age:  Number(req.body.age),
    hobbys: [req.body.hobbys]
    });

    newPerson.save().then((result)=> {
    res.send("thanks");
    }).catch(error=>console.log("errrorrr"));
    };


    exports.getPersonPage=(req,res)=>{

        res.render("searchpage");

    }

exports.getPerson = (req, res) => {

async function getPer(){
 try{
    const per1 = await Person.findOne({name:req.body.name}); //subscriber collectionı icindeki hepsi
   res.render("search",{per:per1});
    
    }
    catch(error){
        next(error);
    }

}

getPer();

};



