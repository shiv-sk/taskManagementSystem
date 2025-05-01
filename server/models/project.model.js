const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:[true , "project name is required"],
        unique:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
} , {timestamps:true})

const Project = mongoose.model("Project" , projectSchema);
module.exports = Project; 