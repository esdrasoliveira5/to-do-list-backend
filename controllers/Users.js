const Users = require('../services/Users');

const createUser = async (req, resp) => {
  const { name, lastName, email, password } = req.body;
  
  const { status, response } = await Users.createUser(name, lastName, email, password);
  
  return resp.status(status).json(response);
};

const loginUser = async (req, resp) => {
  const { email, password } = req.body;
  
  const { status, response } = await Users.loginUser(email, password);
  
  return resp.status(status).json(response);
};

const getUser = async (req, resp) => {
  const { authorization } = req.headers;
  const { id } = req.params;
  
  const { status, response } = await Users.loginUser(authorization, id);
  
  return resp.status(status).json(response);
};

const updateUser = async (req, resp) => {
  const { authorization } = req.headers;
  const { name, lastName, password } = req.body;
  
  const { status, response } = await Users.updateUser(authorization, name, lastName, password);
  
  return resp.status(status).json(response);
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  getUser,
};