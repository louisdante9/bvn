'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Bvns', [{
        bvnNo: '9088899923',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bvnNo: '9088899922',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bvnNo: '9088899921',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bvns', null, {});
  }
};
