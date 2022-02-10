const Users = require('../services/Users')

const createUser = async(req, resp) =>{
  const { name, lastName, email, password } = req.body;
  
  const { status, response } = await Users.createUser(name, lastName, email, password)
  
  return resp.status(status).json(response);
}

module.exports = {
  createUser,
}