import express from 'express';
const router = express.Router();

import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userControllers.js';
import { protect } from '../middlewares/authMiddleware.js';

router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);
router.route('/').post(registerUser);

export default router;
