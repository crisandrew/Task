const Joi = require('joi');

module.exports = {
    payload: Joi.object({
        details: Joi.string(),
        status: Joi.string(),
        subTasks:Joi.array(),
        mainTaskId:Joi.number(),
        isMainTaskOrSubTask:Joi.string(),
        })
    }


