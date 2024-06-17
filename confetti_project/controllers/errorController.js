const httpStatus = require("http-status-codes");
const path = require('path');



    exports.respondNoResourceFound = (req, res) => {
        let errorCode = httpStatus.NOT_FOUND;
        res.status(errorCode);
        res.sendFile(`public/HTML/${errorCode}.html`, {
        root: path.join(__dirname,"../")
        });
        };

exports.respondInternalError = (error, req, res, next) => {
let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
console.log(`ERROR occurred: ${error.stack}`)
res.status(errorCode);
res.send(`${errorCode} | Sorry, our application is
➥experiencing a problem!`);
};



