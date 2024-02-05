// const express =
const router= require("express").Router();
const{ createUser, signup }=require("../Controller/userController");

router.post("/create-users",createUser);
router.post("/sign-up",signup);

module.exports=router;