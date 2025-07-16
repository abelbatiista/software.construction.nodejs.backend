const { Category } = require('../models');

const getAll = () => Category.find({ deleted: false });

const create = async (dto) => Category.create({ ...dto, createdAt: new Date(), createdBy: 'ABel' });

module.exports = {
  getAll,
  create,
};
