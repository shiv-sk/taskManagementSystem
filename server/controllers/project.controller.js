const mongoose = require("mongoose");
const Project = require("../models/project.model");
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");
const asyncHandler = require("../utils/asynchandler");

exports.newProject = asyncHandler(async (req , res)=>{
    const {title , description , owner} = req.body;
    const existProject = await Project.findOne({$and:[{title} , {owner}]});
    if(existProject){
        return res.status(400).json(
            new ApiResponse("project already exist! " , {} , 400 , "fail")
        ) 
    }
    const project = await Project.create({
        title,
        description,
        owner
    });
    if(!project){
        throw new ApiError(500 , "new project is not created! ");
    }
    return res.status(201).json(
        new ApiResponse("new project is! " , project , 201)
    )
});

exports.getProjectsByUser = (async(req , res)=>{
    const {userId} = req.params;
    if(!userId || !mongoose.Types.ObjectId.isValid(userId)){
        throw new ApiError(400 , "userId is empty or inValid! ");
    }
    const projects = await Project.find({owner:userId});
    if(projects.length === 0){
        return res.status(404).json(
            new ApiResponse("no projects for the user! " , {} , 404)
        )
    }
    return res.status(200).json(
        new ApiResponse("projects are! " , projects , 200)
    )
})

exports.getProject = asyncHandler(async(req , res)=>{
    const {projectId} = req.params;
    if(!projectId || !mongoose.Types.ObjectId.isValid(projectId)){
        throw new ApiError(400 , "projectId is missing or inValid! ");
    }
    const project = await Project.findById(projectId).populate("owner" , "name");
    if(!project){
        return res.status(404).json(
            new ApiResponse("project not found! " , {} , 404)
        )
    }
    return res.status(200).json(
        new ApiResponse("project is! " , project , 200)
    )
})

exports.updateProject = asyncHandler(async(req , res)=>{
    const {projectId} = req.params;
    if(!projectId || !mongoose.Types.ObjectId.isValid(projectId)){
        throw new ApiError(400 , "projectId is missing or inValid! ");
    }
    const updatedProject = await Project.findByIdAndUpdate(projectId , req.body , {runValidators:true , new:true});
    if(!updatedProject){
        throw new ApiError(500 , "project is not updated! ");
    }
    return res.status(200).json(
        new ApiResponse("updated project is! " , updatedProject , 200)
    )
})

exports.deleteProject = asyncHandler(async(req , res)=>{
    const {projectId} = req.params;
    if(!jobId || !mongoose.Types.ObjectId.isValid(projectId)){
        throw new ApiError(400 , "projectId is missing or inValid! ");
    }
    const deletedProject = await Project.findByIdAndDelete(projectId);
    if(!deletedProject){
        throw new ApiError(500 , "project is not deleted! ");
    }
    return res.status(204).json()
})