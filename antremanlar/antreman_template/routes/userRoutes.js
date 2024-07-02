const express = require("express");
const userRouter = express.Router();
const usersController=require("../controllers/usersController");


userRouter.get("/", usersController.index,usersController.indexView);
userRouter.get("/new", usersController.new);
userRouter.post("/create",usersController.create,
usersController.redirectView);

module.exports = userRouter;