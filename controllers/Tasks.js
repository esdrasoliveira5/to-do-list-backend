const Tasks = require('../services/Tasks');

const createTasks = async (req, res) => {
  const { authorization } = req.headers;
  const { title, description, priority, dateLimit } = req.body;

  const { status, response } = await Tasks.createTasks(
    authorization, title, description, priority, dateLimit,
    );
  
  return res.status(status).json(response);
};

module.exports = {
  createTasks,
};