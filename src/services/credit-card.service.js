const { CreditCard } = require('../models');

const getAll = () => {
  try {
    return CreditCard.find({ deleted: false });
  } catch (error) {
    console.error('Error getting items');
    console.error(error);
    throw error;
  }
};

const create = async (dto) => {
  try {
    await CreditCard.create({ ...dto, createdAt: new Date(), createdBy: 'ABel' });
  } catch (error) {
    console.log('roberto angel salcedo');
    console.error('Error creating item');
    console.error(error);
    throw error;
  }
};

module.exports = {
  getAll,
  create,
};
