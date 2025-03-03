const express = require('express');

const { gameController } = require('../controllers');

const router = express.Router();
router.get('/', gameController.getAll);
router.get('/by-franchise/:relationId', gameController.getAllByRelationId);
router.get('/:id', gameController.findById);

module.exports = router;
