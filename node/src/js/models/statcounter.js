'use strict';
module.exports = (sequelize, DataTypes) => {
  const StatCounter = sequelize.define('StatCounter', {
    ip: DataTypes.STRING,
    Countable: DataTypes.STRING,
    CountableId: DataTypes.INTEGER,
  }, {});
  StatCounter.associate = function (models) {
    // associations can be defined here
  };
  return StatCounter;
};