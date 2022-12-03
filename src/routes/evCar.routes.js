//import important libs
const express=require("express");



//import StationController
const evCarController=require("../controllers/evCar.controllers");

//create a route
const router=express.Router();

//use checkToken so that routes below it needs token, without token it won't work
// router.use(checkToken);

//define route for creating a Station
router.post("/addCar",evCarController.addCar);

//define route for getting all Station
router.get("/getAllCar",evCarController.getAllCar);
// router.get("/getOne/:id",StationController.getOneStation);

//export router
module.exports=router;