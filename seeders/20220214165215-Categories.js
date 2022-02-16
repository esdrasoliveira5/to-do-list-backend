'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Categories',
    [
      {
        name: 'Não iniciado',
      },
      {
        name: 'Iniciado',
      },
      {
        name: 'Concluído',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Categories', null, {}),
};