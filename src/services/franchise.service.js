const { DB } = require('../config');

const getAll = async () => {
  try {
    const [rows] = await DB.query('CALL GetFranchises()');
    return rows.find(Boolean);
  } catch (error) {
    console.error('Error getting items');
    console.error(error);
    throw error;
  }
};

const findById = async (id) => {
  try {
    const [rows] = await DB.query('CALL FindFranchiseById(?)', [id]);
    return rows.find(Boolean).find(Boolean) ?? null;
  } catch (error) {
    console.error('Error finding item');
    console.error(error);
    throw error;
  }
};

module.exports = {
  getAll,
  findById,
};
