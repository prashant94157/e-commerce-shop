import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.id;
      // console.log(req.user);
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, TOKEN failed!!');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, TOKEN failed!!');
  }
});

export { protect };
