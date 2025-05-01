const express = require("express");
const Router = express.Router();
const { newTask , getTasksByProject , getTask , updateTask , deleteTask } = require("../controllers/task.controller");
const { newTaskSchema , editTaskSchema } = require("../validations/task.validation");
const validateInput = require("../middleware/validation.middleware"); 
Router.route("/new/:projectId").post(validateInput(newTaskSchema) , newTask);
Router.route("/get/alltasks/:projectId").get(getTasksByProject);
Router.route("/:taskId").get(getTask).patch(validateInput(editTaskSchema) , updateTask).delete(deleteTask);

module.exports = Router;
