const express = require('express');

const { creditCardController } = require('../controllers');

const router = express.Router();

router.get('/', creditCardController.getAll);
router.post('/', creditCardController.create);

module.exports = router;
