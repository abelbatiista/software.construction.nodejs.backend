const { gameService } = require('../services');

const getAll = async (req, res) => {
  try {
    const items = await gameService.getAll();
    res.status(200).json({
      ok: true,
      message: 'success!',
      data: [...items],
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Error getting items', error });
  }
};

const getAllByRelationId = async (req, res) => {
  try {
    const items = await gameService.getAllByRelationId(req.params.relationId);
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
    const item = await gameService.findById(req.params.id);
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

module.exports = {
  getAll,
  getAllByRelationId,
  findById,
};
