const express = require('express');

const { franchiseController } = require('../controllers');

const router = express.Router();
router.get('/', franchiseController.getAll);
router.get('/:id', franchiseController.findById);

module.exports = router;
