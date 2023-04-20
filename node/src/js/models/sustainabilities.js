'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sustainability = sequelize.define('Sustainability', {
    title: DataTypes.STRING
  }, {});
  Sustainability.associate = function(models) {
    // associations can be defined here
    Sustainability.hasMany(models.CompanySustainability, { onDelete: "CASCADE", hooks: true });
    Sustainability.hasMany(models.ProfSustainability, { onDelete: "CASCADE", hooks: true });
  };
  return Sustainability;
};
