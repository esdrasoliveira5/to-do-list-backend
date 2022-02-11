require('dotenv').config();
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const { Users, Tasks } = require('../models');
const isTokenValid = require('../helpers/isTokenValid');

const secret = process.env.JWT_SECRET;
const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

const createUser = async (name, lastName, email, password) => {
  const { error } = Joi.object({
    name: Joi.string().not().empty().required(),
    lastName: Joi.string().not().empty().required(),
    email: Joi.string().not().empty().required(),
    password: Joi.string().not().empty().required(),
  }).validate({ name, lastName, email, password });

  if (error) {
    return { status: 400, response: { message: error.details[0].message } };
  }
  const userExist = await Users.findOne({ where: { email } });
  if (userExist !== null) return { status: 400, response: { message: 'User alreddy exists' } };

  await Users.create({ name, lastName, email, password });

  const token = jwt.sign({ data: email }, secret, jwtConfig);
  
  return { status: 201, response: token };
};

const loginUser = async (email, password) => {
  const { error } = Joi.object({
    email: Joi.string().not().empty().required(),
    password: Joi.string().not().empty().required(),
  }).validate({ email, password });

  if (error) {
    return { status: 400, response: { message: error.details[0].message } };
  }

  const userExists = await Users.findOne({ where: { email } });
  if (userExists === null) return { status: 400, response: { message: 'User not found' } };
  
  if (userExists.dataValues.password !== password) {
    return { status: 400, response: { message: 'Wrong Password' } };
  }
  const token = jwt.sign({ data: email }, secret, jwtConfig);

  return { status: 202, response: token };
};

const getUser = async (token) => {
  const validToken = await isTokenValid(token);

  if (validToken.status) return validToken;

  const user = await Users.findOne({
    where: { id: validToken.id },
    include: { model: Tasks, as: 'tasks' },
  });
  if (user === null) return { status: 404, response: { message: 'User does not exist' } };

  return { status: 200, response: user };
};

const updateUser = async (token, name, lastName, password) => {
  const validToken = await isTokenValid(token);
  const { error } = Joi.object({
    name: Joi.string().not().empty().required(),
    lastName: Joi.string().not().empty().required(),
    password: Joi.string().not().empty().required(),
  }).validate({ name, lastName, password });

  if (validToken.status) return validToken;
  if (error) {
    return { status: 400, response: { message: error.details[0].message } };
  }
  await Users.update({ name, lastName, password }, { where: { id: validToken.id } });

    return { status: 200, response: { name, lastName, password } };
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  getUser,
};
