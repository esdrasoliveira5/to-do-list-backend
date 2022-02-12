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

const updateTasks = async ({ token, id, title, description, priority, dateLimit }) => {
  const validToken = await isTokenValid(token);
  const { error } = Joi.object({
    id: Joi.number().not().empty().required(),
    title: Joi.string().not().empty().required(),
    description: Joi.string().not().empty().required(),
    priority: Joi.string().not().empty().required(),
    dateLimit: Joi.date().not().empty().required(),
  }).validate({ id, title, description, priority, dateLimit });

  if (error) {
    return { status: 400, response: { message: error.details[0].message } };
  }
  if (validToken.status) return validToken;

  const tasks = await Tasks.findOne({ where: { userId: validToken.id } });
  if (tasks === null) return { status: 404, response: { message: 'Task not found' } };
  
  await Tasks.update({ title, description, priority, dateLimit }, { where: { id } });

  return { status: 200, response: { title, description, priority, dateLimit } };
};

module.exports = {
  createTasks,
  getAllTasks,
  updateTasks,
};