const { authService } = require('../services');
const { authValidation } = require('../validations');

const signIn = async (req, res) => {
  try {
    const { error, value } = authValidation.signIn.validate(req.body);
    if (error) {
      return res.status(400).json({ ok: false, error: error.details[0].message });
    }

    const result = await authService.signIn(value);

    res.status(201).json({
      ok: true,
      message: 'success!',
      data: {
        ...result,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, message: 'Error creating item', error: error?.message });
  }
};

const signUp = async (req, res) => {
  try {
    const { error, value } = authValidation.signUp.validate(req.body);
    if (error) {
      return res.status(400).json({ ok: false, error: error.details[0].message });
    }

    const result = await authService.signUp(value);
    res.status(201).json({
      ok: true,
      message: 'success!',
      data: { ...result },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, message: 'Error creating item', error: error?.message });
  }
};

module.exports = {
  signIn,
  signUp,
};
