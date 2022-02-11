const Tasks = require('../services/Tasks');

const createTasks = async (req, res) => {
  const { authorization } = req.headers;
  const { title, description, priority, dateLimit } = req.body;
  const values = { token: authorization, title, description, priority, dateLimit };
  const { status, response } = await Tasks.createTasks(values);
  
  return res.status(status).json(response);
};

module.exports = {
  createTasks,
};