//import important libs
const express=require("express");

//import checkToken
// const checkToken=require("../middlewares/checkToken");

//import StationController
const StationController=require("../controllers/station.controllers");

//create a route
const router=express.Router();

//use checkToken so that routes below it needs token, without token it won't work
// router.use(checkToken);

//define route for creating a Station
router.post("/create",StationController.createStation);

//define route for getting all Station
router.get("/getAll",StationController.getAllStation);
router.get("/getOne/:id",StationController.getOneStation);

//export router
module.exports=router;