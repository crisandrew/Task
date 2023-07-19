const Joi = require('joi');

module.exports = {
    payload: Joi.object({
        createdBy: Joi.string(),
        createdByName: Joi.string(),
        details: Joi.string(),
        status: Joi.string(),
        completedByName: Joi.string(),
        completedById: Joi.number(),
        subTasks:Joi.array(),
        archive:Joi.boolean(),
        mainTaskId:Joi.number(),
        isMainTaskOrSubTask:Joi.string(),
        institutionId:Joi.number()
        })
    }


