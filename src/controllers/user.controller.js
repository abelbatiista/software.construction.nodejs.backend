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
    res.status(500).json({ ok: false, message: 'Error getting items', error });
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
    res.status(500).json({ ok: false, message: 'Error finding item', error });
  }
};

const create = async (req, res) => {
  try {
    const result = await userService.create(req.body);
    console.log({ result });
    res.status(201).json({
      ok: true,
      message: 'success!',
      data: {},
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Error creating item', error });
  }
};

const update = async (req, res) => {
  try {
    const result = await userService.update(req.params.id, req.body);
    console.log({ result });
    res.status(201).json({
      ok: true,
      message: 'success!',
      data: {},
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Error updating item', error });
  }
};

const softDelete = async (req, res) => {
  try {
    const result = await userService.softDelete(req.params.id);
    console.log({ result });
    res.status(200).json({
      ok: true,
      message: 'success!',
      data: {},
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Error deleting item', error });
  }
};

module.exports = {
  getAll,
  findById,
  create,
  update,
  softDelete,
};
