const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const secret = process.env.JWT_SECRET;

module.exports = async (token) => {
  if (!token) return { status: 401, response: { message: 'Token not found' } };
  try {
    const decoded = jwt.verify(token, secret);

    const user = await Users.findOne({ where: { email: decoded.data } });
    if (user === null) return { status: 401, response: { message: 'Expired or invalid token' } };
    return user;
  } catch (error) {
    return { status: 401, response: { message: 'Expired or invalid token' } };
  }
};
