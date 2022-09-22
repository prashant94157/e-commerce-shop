import express from 'express';
const router = express.Router();

import {
  addOrderItems,
  addOrderById,
  updateOrderToPaid,
} from '../controllers/orderControllers.js';
import { protect } from '../middlewares/authMiddleware.js';

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, addOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router;
