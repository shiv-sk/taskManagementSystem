const express = require("express");
const Router = express.Router();
const { newProject , getProjectsByUser , getProject , updateProject , deleteProject } = require("../controllers/project.controller");
const {newProjectSchema , editProjectSchema } = require("../validations/project.validation");
const validateInput = require("../middleware/validation.middleware"); 
Router.route("/new").post(validateInput(newProjectSchema) , newProject);
Router.route("/get/allprojects/:userId").get(getProjectsByUser);
Router.route("/:projectId").get(getProject).patch(validateInput(editProjectSchema) , updateProject).delete(deleteProject);

module.exports = Router;
