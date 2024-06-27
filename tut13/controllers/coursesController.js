const Course = require("../models/courses.js");

exports.createCourse=function(title,desc,items){

    Course.create( {
        title:title,
        description:desc
        });

}

