const { creditCardService } = require('../services');
const { creditCardValidation } = require('../validations');

const getAll = async (req, res) => {
  try {
    const items = await creditCardService.getAll();
    res.status(200).json({
      ok: true,
      message: 'success!',
      data: [...items],
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Error getting items', error: error?.message });
  }
};

const create = async (req, res) => {
  try {
    const { error, value } = creditCardValidation.create.validate(req.body);
    if (error) {
      return res.status(400).json({ ok: false, error: error.details[0].message });
    }

    await creditCardService.create(value);
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

module.exports = {
  getAll,
  create,
};
