const express = require('express');

const { userController } = require('../controllers');

const router = express.Router();
router.get('/', userController.getAll);
router.get('/:id', userController.findById);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.softDelete);

module.exports = router;
