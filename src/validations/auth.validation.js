const Joi = require('joi');

const signIn = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().required(),
});

const signUp = Joi.object({
  fullName: Joi.string().required(),
  username: Joi.string().lowercase().required(),
  email: Joi.string().email().lowercase().required(),
  phone: Joi.string().required(),
  password: Joi.string().required(),
  repeatPassword: Joi.string().required(),
});

module.exports = {
  signUp,
  signIn,
};
