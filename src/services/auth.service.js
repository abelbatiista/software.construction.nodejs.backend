const { User } = require('../models');

const signIn = ({ email, password }) => {
  try {
    return User.findOne({ deleted: false, email, password });
  } catch (error) {
    console.error('Error finding item');
    console.error(error);
    throw error;
  }
};

const signUp = async (dto) => {
  try {
    await User.create({ ...dto, createdAt: new Date(), createdBy: 'ABel' });
  } catch (error) {
    console.log('roberto angel salcedo');
    console.error('Error creating item');
    console.error(error);
    throw error;
  }
};

module.exports = {
  signIn,
  signUp,
};
