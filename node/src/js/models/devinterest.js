'use strict';
module.exports = (sequelize, DataTypes) => {
  const DevInterest = sequelize.define('DevInterest', {
    title: DataTypes.STRING
  }, {});
  DevInterest.associate = function(models) {
    DevInterest.hasMany(models.ProfessionalDevInterest, { onDelete: "CASCADE", hooks: true });
  };
  return DevInterest;
};
