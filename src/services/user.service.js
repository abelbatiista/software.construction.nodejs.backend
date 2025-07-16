const { User } = require('../models');

const getAll = () => User.find({ deleted: false });

const findById = (id) => User.findOne({ _id: id, deleted: false });

const create = async (dto) => User.create({ ...dto, createdAt: new Date(), createdBy: 'ABel' });

const update = async (id, dto) =>
  User.findOneAndUpdate(
    {
      _id: id,
      deleted: false,
    },
    { ...dto, updatedAt: new Date(), updatedBy: 'ABel' },
    { new: true },
  );

const softDelete = async (id) =>
  User.findOneAndUpdate(
    {
      _id: id,
      deleted: false,
    },
    { deleted: true, deletedBy: 'ABel', deletedAt: new Date() },
    { new: true },
  );

const updateUCauses = async (id, causeId) => {
  const user = await findById(id);

  if (!user) {
    throw new Error('User not found');
  }

  if (!user.causes.includes(causeId)) {
    user.causes = [...user.causes, causeId];
    await user.save();
  }

  return user;
};

module.exports = {
  getAll,
  findById,
  create,
  update,
  softDelete,
  updateUCauses,
};
