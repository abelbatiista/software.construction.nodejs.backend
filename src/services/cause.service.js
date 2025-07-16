const { Cause } = require('../models');

const findById = (id) => Cause.findOne({ _id: id, deleted: false });

const getAll = () => Cause.find({ deleted: false });

const create = async (dto) => Cause.create({ ...dto, createdAt: new Date(), createdBy: 'ABel' });

const updateStock = async (id, dto) => {
  const cause = await findById(id);

  if (!cause) {
    throw new Error('Cause not found');
  }

  cause.stock += dto.stock;

  if (cause.stock > cause.needed) {
    throw new Error('Stock cannot exceed needed amount');
  }

  cause.updatedAt = new Date();
  cause.updatedBy = 'ABel';

  await cause.save();

  return cause;
};

module.exports = {
  getAll,
  create,
  updateStock,
};
