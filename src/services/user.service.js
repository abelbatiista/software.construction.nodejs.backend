const { User } = require('../models');

const getAll = () => {
  try {
    return User.find({ deleted: false });
  } catch (error) {
    console.error('Error getting items');
    console.error(error);
    throw error;
  }
};

const findById = (id) => {
  try {
    return User.findOne({ _id: id, deleted: false });
  } catch (error) {
    console.error('Error finding item');
    console.error(error);
    throw error;
  }
};

const create = async (dto) => {
  try {
    console.log(dto);
    await User.create({ ...dto, createdAt: new Date(), createdBy: 'ABel' });
  } catch (error) {
    console.log('roberto angel salcedo');
    console.error('Error creating item');
    console.error(error);
    throw error;
  }
};

const update = async (id, dto) => {
  try {
    await User.findOneAndUpdate(
      {
        _id: id,
        deleted: false,
      },
      { ...dto, updatedAt: new Date(), updatedBy: 'ABel' },
      { new: true },
    );
  } catch (error) {
    console.error('Error updating item');
    console.error(error);
    throw error;
  }
};

const softDelete = async (id) => {
  try {
    await User.findOneAndUpdate(
      {
        _id: id,
        deleted: false,
      },
      { deleted: true, deletedBy: 'ABel', deletedAt: new Date() },
      { new: true },
    );
  } catch (error) {
    console.error('Error deleting item');
    console.error(error);
    throw error;
  }
};

module.exports = {
  getAll,
  findById,
  create,
  update,
  softDelete,
};
