import express from 'express';
import { registerUser, loginUser, getUserInfo } from '../controller/authController.js';
import requireAuth from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', requireAuth, getUserInfo);
// protect,

export default router;
