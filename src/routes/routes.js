// const express =
const router= require("express").Router();
const { consultation } = require("../Controller/consultationController");
const { service } = require("../Controller/serviceController");
const{ createUser, signup }=require("../Controller/userController");

router.post("/create-users",createUser);
router.post("/sign-up",signup);


//consultation Routes
router.post("/consultation", consultation);

//service routes
router.post("/apply",service);


module.exports=router;