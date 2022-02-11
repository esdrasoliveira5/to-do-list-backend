require('dotenv').config();
const jwt = require('jsonwebtoken');

const { Users } = require('../models');

const secret = process.env.JWT_SECRET;
const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

const createUser = async (name, lastName, email, password) => {
  const token = jwt.sign({ data: email }, secret, jwtConfig);

  const findEmail = await Users.findOne({ where: { email } });

  const passwordHash = jwt.sign({ data: password }, secret, { algorithm: 'HS256' });

  await Users.create({ name, lastName, email, password: passwordHash });

  return { status: 201, response: { message: 'Usuario criado' } };
};

const loginUser = async (email, password) => {
  const token = jwt.sign({ data: email }, secret, jwtConfig);
  
  const passwordHash = jwt.sign({ data: password }, secret, { algorithm: 'HS256' });

  const user = await Users.findOne({ where: { email } });

  return { status: 201, response: { message: 'Usuario criado' } };
};

module.exports = {
  createUser,
  loginUser,
};
