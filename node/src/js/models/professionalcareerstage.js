'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProfessionalCareerStage = sequelize.define('ProfessionalCareerStage', {
    ProfessionalId: DataTypes.INTEGER,
    CareerStageId: DataTypes.INTEGER
  }, {});
  ProfessionalCareerStage.associate = function(models) {
    ProfessionalCareerStage.belongsTo(models.Professional);
    ProfessionalCareerStage.belongsTo(models.CareerStage);
  };
  return ProfessionalCareerStage;
};
