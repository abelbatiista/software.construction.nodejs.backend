const { DB } = require('../config');

const getAll = async () => {
  try {
    const [rows] = await DB.query('CALL GetUsers()');
    return rows.find(Boolean);
  } catch (error) {
    console.error('Error getting items');
    console.error(error);
    throw error;
  }
};

const findById = async (id) => {
  try {
    const [rows] = await DB.query('CALL FindUserById(?)', [id]);
    return rows.find(Boolean).find(Boolean) ?? null;
  } catch (error) {
    console.error('Error finding item');
    console.error(error);
    throw error;
  }
};

const create = async (dto) => {
  try {
    await DB.query('CALL CreateUser(?, ?, ?, ?)', [
      dto.username,
      dto.email,
      dto.password,
      dto.roleId,
    ]);
    return {};
  } catch (error) {
    console.error('Error creating item');
    console.error(error);
    throw error;
  }
};

const update = async (id, dto) => {
  try {
    await DB.query('CALL UpdateUser(?, ?, ?, ?, ?)', [
      id,
      dto.username,
      dto.email,
      dto.password,
      dto.roleId,
    ]);
    return {};
  } catch (error) {
    console.error('Error updating item');
    console.error(error);
    throw error;
  }
};

const softDelete = async (id) => {
  try {
    await DB.query('CALL DeleteUser(?)', [id]);
    return {};
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
