import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

// @desc    Create new order
// @route   POST /api/order
// @access  private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    totalPrice,
    shippingPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(401);
    throw new Error('No order items');
    return;
  }
  const order = new Order({
    user: req.user._id,
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    totalPrice,
    shippingPrice,
  });

  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
});

export { addOrderItems };
