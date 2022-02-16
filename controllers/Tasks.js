const Tasks = require('../services/Tasks');

const createTasks = async (req, res) => {
  const { authorization } = req.headers;
  const { title, description, priority, dateLimit } = req.body;
  const values = { token: authorization, title, description, priority, dateLimit };
  const { status, response } = await Tasks.createTasks(values);
  
  return res.status(status).json(response);
};

const getAllTasks = async (req, res) => {
  const { authorization } = req.headers;

  const { status, response } = await Tasks.getAllTasks(authorization);
  
  return res.status(status).json(response);
};

const getCategoryTasks = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;

  const { status, response } = await Tasks.getCategoryTasks(authorization, id);
  
  return res.status(status).json(response);
};

const getTasks = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;

  const { status, response } = await Tasks.getTasks(authorization, id);
  
  return res.status(status).json(response);
};

const updateCategoriesTasks = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const { categoryId } = req.body;

  const { status, response } = await Tasks.updateCategoriesTasks(authorization, id, categoryId);
  
  return res.status(status).json(response);
};

const updateTasks = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const { title, description, priority, dateLimit } = req.body;
  const values = {
    token: authorization,
    id,
    title,
    description,
    priority,
    dateLimit,
  };

  const { status, response } = await Tasks.updateTasks(values);
  
  return res.status(status).json(response);
};

const deleteTasks = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;

  const { status, response } = await Tasks.deleteTasks(authorization, id);
  
  return res.status(status).json(response);
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