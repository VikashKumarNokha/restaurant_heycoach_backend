const express = require("express");
const userRouter = express.Router();
const { createUser, getAllUsers} = require("../controllers/user.controller");

userRouter.post("/", createUser);
userRouter.get("/", getAllUsers);

module.exports = userRouter;