const Joi = require("joi");
exports.newProjectSchema = Joi.object({
    title:Joi.string().trim().required().min(3).max(200),
    description:Joi.string().trim().required().min(3).max(200),
    owner:Joi.string().hex().length(24).required(),
})


exports.editProjectSchema = Joi.object({
    title:Joi.string().trim().min(3).max(200).optional(),
    description:Joi.string().trim().min(3).max(200).optional(),
    owner:Joi.string().hex().length(24).optional(),
}).min(1);
