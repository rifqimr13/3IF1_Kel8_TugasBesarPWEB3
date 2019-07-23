const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

router.post('/register', userController.postRegister);
router.post('/login', userController.postLogin);

module.exports = router;