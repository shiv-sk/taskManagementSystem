const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:[true , "task title is required"],
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["Opened" , "Assigned" , "Closed"],
        default:"Opened"
    },
    completedAt:{
        type:Date,
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:null
    }
} , {timestamps:true})

const Task = mongoose.model("Task" , taskSchema);
module.exports = Task; 