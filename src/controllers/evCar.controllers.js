//import StationSchema
const evCar=require("../models/evCar");

//import HttpResponse
const HttpResponse=require("../models/http-response");

//define createStation function here
const addCar=async(req,res)=>{
    const{Company, Model,Style,Range,Transmission,VehicleType, PriceRange, Capacity, BootSpace, BaseModel,TopModel}=req.body;
    const addNewcar=new evCar({
        Company,
        Model,
        Style,
        Range,
        Transmission,
        VehicleType,
        PriceRange, 
        Capacity, 
        BootSpace, 
        BaseModel,
        TopModel
 
    });
    //save it now in db.
    try{
        await addNewcar.save();
    }catch(err){
        const error=new HttpResponse("Error in saving New Car in DB",500);
        return res.status(500).json({response:error});
    }
    //return response
    res.status(201).json(addNewcar);
};

//define getAllStation function
const getAllCar=async(req,res)=>{
    //find all Station
    let fetchedCar;
    
    try{
        fetchedCar=await evCar.find({});
    }catch(err){
        const error=new HttpResponse("Error in finding all Cars",500);
        return res.status(500).json({response:error});
    }
    console.log(fetchedCar)
    //send response
    res.status(201).json(fetchedCar);
};

//export functions

exports.addCar=addCar;
exports.getAllCar=getAllCar;
