const mongoose = require("mongoose");
const consultationSchema = new mongoose.Schema({
    
    Name :{type:String, trim:true},

    email:{ type: String, trim:true},

    organization:{type:String,trim:true},

    phoneNumber:{type:Number},
    
    projectDetail:{type:String},
    

},{timestamps:true});
module.exports=mongoose.model("consultation", consultationSchema);
