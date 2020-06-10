// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     phoneNo: DataTypes.INTEGER,
//     accountNo: DataTypes.INTEGER
//   }, {});
//   User.associate = function(models) {
//     // associations can be defined here
//   };
//   return User;
// };

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('Users', [{
//       firstName: 'John',
//       lastName: 'Doe',
//       phoneNo: 23455,
//       accountNo: 223344,
//       createdAt: new Date(),
//       updatedAt: new Date()
//     }]);
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('Users', null, {});
//   }
// };



