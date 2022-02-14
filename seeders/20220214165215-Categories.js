'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Categories',
    [
      {
        name: 'Nao Iniciado',
      },
      {
        name: 'iniciado',
      },
      {
        name: 'Concluido',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Categories', null, {}),
};