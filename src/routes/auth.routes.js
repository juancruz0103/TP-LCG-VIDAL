const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { validateLogin, validateRegister } = require('../schemas/auth.schema');
const validateSchema = require('../middlewares/validateSchema');
const authMiddleware = require('../middlewares/auth.middleware');

// User login route
router.post('/login', validateSchema(validateLogin), authController.login);

// User registration route
router.post('/register', validateSchema(validateRegister), authController.register);

// Logout route
router.post('/logout', authMiddleware, authController.logout);

module.exports = router;