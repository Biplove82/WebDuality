const mongoose = require("mongoose");
const consultationSchema = new mongoose.Schema({
    
    yourName :{type:String, trim:true},

    email:{ type: String, required: true,unique:true,trim:true},

    organization:{type:String,required:true,trim:true},

    phoneNumber:{type:Number,required:true,unique:true},
    
    projectDetail:{type:string},
    

},{timestamps:true});
module.exports=mongoose.model("consultation", consultationSchema);
