const Joi = require('joi');

const create = Joi.object({
  fullName: Joi.string().required(),
  method: Joi.string().required(),
  cardNumber: Joi.string().required(),
  expirationDate: Joi.string().required(),
  cvc: Joi.string().required(),
  amount: Joi.number().required(),
});

module.exports = {
  create,
};
