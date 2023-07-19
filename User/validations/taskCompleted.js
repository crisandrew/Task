'use strict';

const Joi = require('joi');

module.exports = {
    params: Joi.object({
        _id: Joi.string().required(),
      })
    }


