require('dotenv').config();
const Joi = require('joi');

const { Tasks, Users } = require('../models');
const isTokenValid = require('../helpers/isTokenValid');

const createTasks = async ({ token, title, description, priority, dateLimit }) => {
  const validToken = await isTokenValid(token);
  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    description: Joi.string().not().empty().required(),
    priority: Joi.string().not().empty().required(),
    dateLimit: Joi.string().not().empty().required(),
  }).validate({ title, description, priority, dateLimit });

  if (error) {
    return { status: 400, response: { message: error.details[0].message } };
  }
  if (validToken.status) return validToken;
  
  const task = await Tasks.create({
     title, description, priority, dateLimit, userId: validToken.id,
    });

  return { status: 200, response: task };
};

const getAllTasks = async (token) => {
  const validToken = await isTokenValid(token);

  if (validToken.status) return validToken;

  const allTasks = await Tasks.findAll({
    where: { userId: validToken.id },
    include: { model: Users, as: 'user', attributes: { exclude: ['password'] } },
  });

  return { status: 200, response: allTasks };
};

module.exports = {
  createTasks,
  getAllTasks,
};