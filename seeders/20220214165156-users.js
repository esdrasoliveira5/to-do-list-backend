'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        name: 'Esdras',
        lastName: 'Oliveira',
        email: 'esdras@email.com',
        password: '12345678',
        created: '2022-02-02',
      },
      {
        name: 'JEduardo',
        lastName: 'Oliveira',
        email: 'edu@test.com',
        password: '12345678',
        created: '2022-02-02',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};