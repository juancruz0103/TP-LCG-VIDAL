import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/user.controller.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { userSchema } from '../schemas/user.schema.js';

const router = express.Router();

// Route for user registration
router.post('/register', validateSchema(userSchema), registerUser);

// Route for user login
router.post('/login', validateSchema(userSchema), loginUser);

// Route for getting user profile (protected)
router.get('/profile', authMiddleware, getUserProfile);

export default router;