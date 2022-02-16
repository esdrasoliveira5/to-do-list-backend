'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Tasks',
    [
      {
        title: 'Titulo Teste',
        description: 'Testes testes',
        priority: 'Alta',
        dateLimit: '2022-02-02',
        userId: '1',
        created: '2022-03-03',
        categoryId: 1,
      },
      {
        title: 'Titulo Teste2',
        description: 'Testes2 testes2',
        priority: 'Baixa',
        dateLimit: '2022-02-02',
        userId: '1',
        created: '2022-04-04',
        categoryId: 2,
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Tasks', null, {}),
};