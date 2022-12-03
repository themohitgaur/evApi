//import StationSchema
const Station=require("../models/Station");

//import HttpResponse
const HttpResponse=require("../models/http-response");

//define createStation function here
const createStation=async(req,res)=>{
    const{_id,address,capacity,city,closeTime,cost_per_unit,country,latitude,longitude,names,openTime,payment_modes,postal_code,power_type,staff,station_type,total,type,vehicle_type,vendor_name,zone}=req.body;
    const createNewStation=new Station({
        _id,
        address,  
        capacity,  
        city,  
        closeTime,  
        cost_per_unit,  
        country,  
        latitude, 
        longitude,  
        names,  
        openTime,
        payment_modes,
        postal_code,
        power_type,
        staff, 
        station_type, 
        total,  
        type,
        vehicle_type,
        vendor_name,
        zone
 
    });
    //save it now in db.
    try{
        await createNewStation.save();
    }catch(err){
        const error=new HttpResponse("Error in saving New Station in DB",500);
        return res.status(500).json({response:error});
    }
    //return response
    res.status(201).json(createNewStation);
};

//define getAllStation function
const getAllStation=async(req,res)=>{
    //find all Station
    let fetchedStation;
    
    try{
        fetchedStation=await Station.find({});
    }catch(err){
        const error=new HttpResponse("Error in finding all Station",500);
        return res.status(500).json({response:error});
    }
    //send response
    res.status(201).json(fetchedStation);
};
const getOneStation=async(req,res)=>{
    //find all Station
    let fetchedStation;
    console.log(req.params.id)
    try{
        fetchedStation=await Station.findOne({_id:req.params.id});
    }catch(err){
        const error=new HttpResponse("Error in finding all Station",500);
        return res.status(500).json({response:error});
    }
    //send response
    res.status(201).json(fetchedStation);
};
//export functions

exports.createStation=createStation;
exports.getAllStation=getAllStation;
exports.getOneStation=getOneStation;