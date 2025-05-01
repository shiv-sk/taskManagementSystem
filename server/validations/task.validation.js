const Joi = require("joi");
exports.newTaskSchema = Joi.object({
    title:Joi.string().trim().required().min(3).max(200),
    description:Joi.string().trim().required().min(3).max(200),
})


exports.editTaskSchema = Joi.object({
    title:Joi.string().trim().min(3).max(200).optional(),
    description:Joi.string().trim().min(3).max(200).optional(),
}).min(1);
