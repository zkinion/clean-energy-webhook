'use strict';
module.exports = (sequelize, DataTypes) => {
  const CareerStage = sequelize.define('CareerStage', {
    title: DataTypes.STRING
  }, {});
  CareerStage.associate = function(models) {
    CareerStage.hasMany(models.ProfessionalCareerStage, { onDelete: "CASCADE", hooks: true });
  };
  return CareerStage;
};
