const express = require('express');

const { authController } = require('../controllers');

const router = express.Router();
router.post('/sign-in', authController.signIn);
router.post('/sign-up', authController.signUp);
router.post('/recover-password', authController.recoverPassword);

module.exports = router;
