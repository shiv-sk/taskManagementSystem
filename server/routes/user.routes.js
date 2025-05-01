const express = require("express");
const Router = express.Router();
const {register , login , logOut , currentUser } = require("../controllers/user.controller");
const {userRegisterSchema , userLoginSchema } = require("../validations/user.validation");
const validateInput = require("../middleware/validation.middleware"); 
Router.route("/register").post(validateInput(userRegisterSchema) , register);
Router.route("/login").post(validateInput(userLoginSchema) , login);
Router.route("/logout").get(logOut);
Router.route("/me").get(currentUser);

module.exports = Router;
