'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bvn = sequelize.define('Bvn', {
    bvnNo: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Bvn.associate = function (models) {
    // associations can be defined here
    Bvn.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return Bvn;
};

