const { userService } = require('../services');

const getAll = async (req, res) => {
  try {
    const items = await userService.getAll();
    res.status(200).json({
      ok: true,
      message: 'success!',
      data: [...items],
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'error', error: 'Error getting items' });
  }
};

const findById = async (req, res) => {
  try {
    const item = await userService.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json({
      ok: true,
      message: 'success!',
      data: { ...item },
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'error', error: 'Error finding item' });
  }
};

const create = async (req, res) => {
  try {
    const result = await userService.create(req.body);
    res.status(201).json({
      ok: true,
      message: 'success!',
      data: {},
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'error', error: 'Error creating item' });
  }
};

const update = async (req, res) => {
  try {
    const result = await userService.update(req.params.id, req.body);
    res.status(201).json({
      ok: true,
      message: 'success!',
      data: {},
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'error', error: 'Error updating item' });
  }
};

const softDelete = async (req, res) => {
  try {
    const result = await userService.softDelete(req.params.id);
    res.status(200).json({
      ok: true,
      message: 'success!',
      data: {},
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'error', error: 'Error deleting item' });
  }
};

module.exports = {
  userController: {
    getAll,
    findById,
    create,
    update,
    softDelete,
  },
};
