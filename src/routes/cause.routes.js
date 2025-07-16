const express = require('express');

const { causeController } = require('../controllers');

const router = express.Router();

router.get('/', causeController.getAll);
router.post('/', causeController.create);
router.put('/stock/:id', causeController.updateStock);

module.exports = router;
