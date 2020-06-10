'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      phone: '23455',
      accountNo: '228888334',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'mac',
      lastName: 'fish',
      phone: '23456',
      accountNo: '22883345',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'tony',
      lastName: 'flecher',
      phone: '29883455',
      accountNo: '783889344',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
