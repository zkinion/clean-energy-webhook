'use strict';
module.exports = (sequelize, DataTypes) => {
  const GenInterest = sequelize.define('GenInterest', {
    title: DataTypes.STRING
  }, {});
  GenInterest.associate = function(models) {
    GenInterest.hasMany(models.ProfessionalGenInterest, { onDelete: "CASCADE", hooks: true });
  };
  return GenInterest;
};
