const { User } = require('../models');
const { mailProvider } = require('../miscellaneous');

const signIn = ({ email, password }) => User.findOne({ deleted: false, email, password });

const signUp = async (dto) => User.create({ ...dto, createdAt: new Date(), createdBy: 'ABel' });

const recoverPassword = async (dto) => {
  const user = await User.findOne({ deleted: false, email: dto.email });
  if (!user) {
    throw new Error('User not found');
  }

  const newPassword = '123456';

  await mailProvider({
    to: dto.email,
    subject: 'HumanTogether - Recuperación de contraseña',
    text: `Tu nueva contraseña es: ${newPassword}`,
  });

  user.password = newPassword;
  await user.save();

  return user;
};

module.exports = {
  signIn,
  signUp,
  recoverPassword,
};
