const Joi = require('joi');

const create = Joi.object({
  code: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
});

module.exports = {
  create,
};
