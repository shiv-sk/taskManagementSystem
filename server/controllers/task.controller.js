const mongoose = require("mongoose");
const Task = require("../models/task.model");
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");
const asyncHandler = require("../utils/asynchandler");

exports.newTask = asyncHandler(async (req , res)=>{
    const {projectId} = req.params;
    if(!projectId || !mongoose.Types.ObjectId.isValid(projectId)){
        throw new ApiError(400 , "projectId is empty or inValid! ");
    }
    const {title , description} = req.body;
    const task = await Task.create({
        title,
        description,
        project:projectId
    });
    if(!task){
        throw new ApiError(500 , "new Task is not created! ");
    }
    return res.status(201).json(
        new ApiResponse("new Task is! " , task , 201)
    )
});

exports.getTasksByProject = (async(req , res)=>{
    const {projectId} = req.params;
    if(!projectId || !mongoose.Types.ObjectId.isValid(projectId)){
        throw new ApiError(400 , "projectId is empty or inValid! ");
    }
    const tasks = await Task.find({project:projectId});
    if(tasks.length === 0){
        return res.status(404).json(
            new ApiResponse("no tasks found for project! " , {} , 404)
        )
    }
    return res.status(200).json(
        new ApiResponse("tasks are! " , tasks , 200)
    )
})

exports.getTask = asyncHandler(async(req , res)=>{
    const {taskId} = req.params;
    if(!taskId || !mongoose.Types.ObjectId.isValid(taskId)){
        throw new ApiError(400 , "taskId is missing or inValid! ");
    }
    const task = await Task.findById(taskId);
    if(!task){
        return res.status(404).json(
            new ApiResponse("task not found! " , {} , 404)
        )
    }
    return res.status(200).json(
        new ApiResponse("task is! " , task , 200)
    )
})

exports.updateTask = asyncHandler(async(req , res)=>{
    const {taskId} = req.params;
    if(!taskId || !mongoose.Types.ObjectId.isValid(taskId)){
        throw new ApiError(400 , "taskId is missing or inValid! ");
    }
    const updatedTask = await Task.findByIdAndUpdate(taskId , req.body , {runValidators:true , new:true});
    if(!updatedTask){
        throw new ApiError(500 , "task is not updated! ");
    }
    return res.status(200).json(
        new ApiResponse("updated task is! " , updatedTask , 200)
    )
})

exports.deleteTask = asyncHandler(async(req , res)=>{
    const {taskId} = req.params;
    if(!taskId || !mongoose.Types.ObjectId.isValid(taskId)){
        throw new ApiError(400 , "taskId is missing or inValid! ");
    }
    const deletedTask = await Task.findByIdAndDelete(taskId);
    if(!deletedTask){
        throw new ApiError(500 , "Task is not deleted! ");
    }
    return res.status(204).json()
})