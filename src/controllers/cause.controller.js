const { causeService, userService } = require('../services');
const { causeValidation } = require('../validations');

const getAll = async (req, res) => {
  try {
    const data = await causeService.getAll();
    res.status(200).json({
      ok: true,
      message: 'success!',
      data,
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Error getting items', error: error?.message });
  }
};

const create = async (req, res) => {
  try {
    const { error, value } = causeValidation.create.validate(req.body);
    if (error) {
      return res.status(400).json({ ok: false, error: error.details[0].message });
    }

    const data = await causeService.create(value);
    res.status(201).json({
      ok: true,
      message: 'success!',
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, message: 'Error creating item', error: error?.message });
  }
};

const updateStock = async (req, res) => {
  try {
    if (!req?.params?.id) {
      return res.status(400).json({ ok: false, error: 'Id is required param.' });
    }

    const { error, value } = causeValidation.updateStock.validate(req.body);
    if (error) {
      return res.status(400).json({ ok: false, error: error.details[0].message });
    }

    const causeData = await causeService.updateStock(req.params.id, value);
    const userData = await userService.updateUCauses(value.userId, causeData._id);

    res.status(201).json({
      ok: true,
      message: 'success!',
      data: {
        causeData,
        userData,
      },
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Error updating item', error: error?.message });
  }
};

module.exports = {
  getAll,
  create,
  updateStock,
};
