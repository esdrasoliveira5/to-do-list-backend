const { Users } = require('../models');

const createUser = async ( name, lastName, email, password) => {
 
  await Users.create({ name, lastName, email, password });

  return { status: 201, response: { message: 'Usuario criado'} };
};

module.exports = {
  createUser,
};