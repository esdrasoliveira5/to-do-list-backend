require('dotenv').config();
const Joi = require('joi');

const { Tasks } = require('../models');
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

module.exports = {
  createTasks,
};