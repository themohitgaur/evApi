//create EV Stations Schema
const mongoose=require("mongoose");
// const { Schema } = require("mongoose");

const Schema=mongoose.Schema;

const evCarSchema=new Schema({
    Company: {type:String,required:true}, 
    Model: {type:String,required:true},
    Style: {type:String,required:true},
    Ranges	: {type:String,required:true},
    Transmission: {type:String,required:true},
    VehicleType: {type:String,required:true},
    PriceRange	: {type:String,required:true},
    Capacity	: {type:String,required:true},
    BootSpace	: {type:String,required:true},
    BaseModel	: {type:String,required:true},
    TopModel:{type:String,required:true}

},
{timestamps:{createdAt:"created_at",updatedAt:"updated_at"}}
);

//export
module.exports=mongoose.model('evCar',evCarSchema);