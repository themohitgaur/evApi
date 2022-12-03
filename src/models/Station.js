//create EV Stations Schema
const mongoose=require("mongoose");
// const { Schema } = require("mongoose");

const Schema=mongoose.Schema;

const evStation=new Schema({
       address: {type:String,required:true},  
       capacity : {type:String,required:false},  
       city:{type:String,required:false} ,  
       state:{type:String,required:false},
       closeTime:{type:String,required:false},  
       cost_per_unit:{type:String,required:false},  
       country:{type:String,required:false} ,  
       latitude:{type:String,required:true} , 
       longitude:{type:String,required:true} ,  
       names: {type:String,required:true},  
       openTime: {type:String,required:false},
       payment_modes: {type:String,required:false},
       postal_code: {type:String,required:false},
       power_type: {type:String,required:false},
       staff:{type:String,required:false}, 
       station_type:{type:String,required:false}, 
       total: {type:String,required:false},  
       type:{type:String,required:false},
       vehicle_type: {type:String,required:false},
       vendor_name:{type:String,required:false},
       zone: {type:String,required:false}


},
{timestamps:{createdAt:"created_at",updatedAt:"updated_at"}}
);

//export
module.exports=mongoose.model('station',evStation);