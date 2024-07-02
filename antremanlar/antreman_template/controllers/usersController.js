const User = require("../models/user");


function createUser(first,last,email,passwd,zipcode){

    User.create( {
        name:{first:first,last:last},
        password:passwd,
        email:email,
       zipCode:zipcode
        });


}


module.exports = {
index: (req, res, next) => {
User.find()
.then(users => {
res.locals.users = users; //res.render ejs icindeki users otomatik dolar
next();
}).catch(error => {
console.log(`Error fetching users: ${error.message}`);
next(error);
});
},
indexView: (req, res) => {
res.render("users/index");
},
new: (req, res) => {
    res.render("users/new");
    },
    
    create: (req, res, next) => {
    let userParams = {
    name: {
    first: req.body.first,
    last: req.body.last
    },
    email: req.body.email,
    password: req.body.password,
    zipCode: req.body.zipCode
    };
    User.create(userParams)
    .then(user => {
    res.locals.redirect = "/users";
    res.locals.user = user;
    next();
})
.catch(error => {
console.log(`Error saving user: ${error.message}`);
next(error);
});
},
redirectView: (req, res, next) => {
let redirectPath = res.locals.redirect;
if (redirectPath) res.redirect(redirectPath);
else next();
},
createUser:createUser
};