require('dotenv').config();
const Joi = require('joi');
const { Op } = require('sequelize');

const { Tasks, Categories } = require('../models');
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
    include: { model: Categories, as: 'categories' },
  });

  return { status: 200, response: allTasks };
};

const getTasks = async (token, id) => {
  const validToken = await isTokenValid(token);

  if (validToken.status) return validToken;

  const task = await Tasks.findOne({
    where: { [Op.and]: [{ id }, { userId: validToken.id }] },
    include: { model: Categories, as: 'categories' },
  });

  if (task === null) return { status: 404, response: 'Task not found' };
  return { status: 200, response: task };
};

const getCategoryTasks = async (token, id) => {
  const validToken = await isTokenValid(token);

  if (validToken.status) return validToken;

  const allConcludedTasks = await Tasks.findAll({
    where: { [Op.and]: [{ categoryId: id }, { userId: validToken.id }] },
    include: { model: Categories, as: 'categories' },
  });

  return { status: 200, response: allConcludedTasks };
};

const updateCategoriesTasks = async (token, id, categoryId) => {
  const validToken = await isTokenValid(token);
  const { error } = Joi.object({
    categoryId: Joi.number().not().empty().required(),
  }).validate({ categoryId });

  if (error) return { status: 400, response: { message: error.details[0].message } };
  if (validToken.status) return validToken;
  
  const task = await Tasks.findOne({ where: { id } });
  if (task === null) return { status: 404, response: { message: 'Task not found!' } };
  if (task.userId !== validToken.id) {
    return { status: 401, response: { message: 'Unauthorized user!' } };
  }
  await Tasks.update({ categoryId }, { where: { id } });

  return { status: 200, response: { message: 'Task updated' } };
};

const updateTasks = async ({ token, id, title, description, priority, dateLimit, category }) => {
  const validToken = await isTokenValid(token);
  const { error } = Joi.object({
    id: Joi.number().not().empty().required(),
    title: Joi.string().not().empty().required(),
    description: Joi.string().not().empty().required(),
    priority: Joi.string().not().empty().required(),
    dateLimit: Joi.date().not().empty().required(),
  }).validate({ id, title, description, priority, dateLimit });

  if (error) return { status: 400, response: { message: error.details[0].message } };
  if (validToken.status) return validToken;
  
  const task = await Tasks.findOne({ where: { id } });
  if (task === null) return { status: 404, response: { message: 'Task not found!' } };
  if (task.userId !== validToken.id) {
    return { status: 401, response: { message: 'Unauthorized user' } };
  }
  await Tasks.update({ title, description, priority, dateLimit }, { where: { id } });

  return { status: 200, response: { title, description, priority, dateLimit, category } };
};

const deleteTasks = async (token, id) => {
  const validToken = await isTokenValid(token);
  if (validToken.status) return validToken;

  const task = await Tasks.findOne({ where: { id } });
  if (task === null) return { status: 404, response: { message: 'Task not found' } };
  if (task.userId !== validToken.id) {
    return { status: 401, response: { message: 'Unauthorized user' } };
  }
  await Tasks.destroy({ where: { id } });

  return { status: 200, response: { message: 'Task deleted' } };
};

module.exports = {
  createTasks,
  getAllTasks,
  getCategoryTasks,
  updateCategoriesTasks,
  getTasks,
  updateTasks,
  deleteTasks,
};