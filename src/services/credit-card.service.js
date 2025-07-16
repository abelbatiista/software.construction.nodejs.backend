const { CreditCard } = require('../models');

const getAll = () => CreditCard.find({ deleted: false });

const create = async (dto) =>
  CreditCard.create({ ...dto, createdAt: new Date(), createdBy: 'ABel' });

module.exports = {
  getAll,
  create,
};
