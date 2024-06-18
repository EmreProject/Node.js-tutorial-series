const Course = require("../models/course.js");

exports.createCourse=function(title,desc,items){

    Course.create( {
        title:title,
        description:desc
        });

}

exports.CoursesArray=function(){


    const dön=Course.find({}).then(all=>{
       
       return all;
    });

    return dön;
  
}

exports.getAllCourses = (req, res, next) => {

    async function getAll(){
     try{
        const courses = await Course.find(); //subscriber collectionı icindeki hepsi
        req.data1 = courses;
        next();
        }
        catch(error){
            next(error);
        }
    
    }
    
    getAll();
    
    };