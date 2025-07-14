const { userService } = require('../services');
const { userValidation } = require('../validations');

const getAll = async (req, res) => {
  try {
    const items = await userService.getAll();
    res.status(200).json({
      ok: true,
      message: 'success!',
      data: [...items],
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Error getting items', error: error?.message });
  }
};

const findById = async (req, res) => {
  try {
    if (!req?.params?.id) {
      return res.status(400).json({ ok: false, error: 'Id is required param.' });
    }

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
    res.status(500).json({ ok: false, message: 'Error finding item', error: error?.message });
  }
};

const create = async (req, res) => {
  try {
    const { error, value } = userValidation.create.validate(req.body);
    if (error) {
      return res.status(400).json({ ok: false, error: error.details[0].message });
    }

    await userService.create(value);
    res.status(201).json({
      ok: true,
      message: 'success!',
      data: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, message: 'Error creating item', error: error?.message });
  }
};

const update = async (req, res) => {
  try {
    if (!req?.params?.id) {
      return res.status(400).json({ ok: false, error: 'Id is required param.' });
    }

    const { error, value } = userValidation.update.validate(req.body);
    if (error) {
      return res.status(400).json({ ok: false, error: error.details[0].message });
    }

    await userService.update(req.params.id, value);
    res.status(201).json({
      ok: true,
      message: 'success!',
      data: {},
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Error updating item', error: error?.message });
  }
};

const softDelete = async (req, res) => {
  try {
    if (!req?.params?.id) {
      return res.status(400).json({ ok: false, error: 'Id is required param.' });
    }

    await userService.softDelete(req.params.id);
    res.status(200).json({
      ok: true,
      message: 'success!',
      data: {},
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Error deleting item', error: error?.message });
  }
};

module.exports = {
  getAll,
  findById,
  create,
  update,
  softDelete,
};
