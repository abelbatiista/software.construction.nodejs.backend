const Joi = require('joi');

const create = Joi.object({
  fullName: Joi.string().trim().required(),
  username: Joi.string().trim().lowercase().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().required(),
  phone: Joi.string().required(),
  role: Joi.string().valid('admin', 'user', 'guest').default('user'),
});

const update = Joi.object({
  fullName: Joi.string().trim().optional(),
  username: Joi.string().trim().lowercase().optional(),
  email: Joi.string().email().lowercase().optional(),
  phone: Joi.string().optional(),
  role: Joi.string().valid('admin', 'user', 'guest').optional(),
});

module.exports = {
  create,
  update,
};
