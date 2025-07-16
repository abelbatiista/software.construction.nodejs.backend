const Joi = require('joi');

const create = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  city: Joi.string().required(),
  hood: Joi.string().required(),
  stock: Joi.number().required(),
  needed: Joi.number().required(),
  categoryId: Joi.string().required(),
});

const updateStock = Joi.object({
  stock: Joi.number().required(),
  userId: Joi.string().required(),
});

module.exports = {
  create,
  updateStock,
};
