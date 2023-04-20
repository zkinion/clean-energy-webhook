'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProfessionalTraining = sequelize.define('ProfessionalTraining', {
    ProfessionalId: DataTypes.INTEGER,
    TrainingId: DataTypes.INTEGER
  }, {});
  ProfessionalTraining.associate = function(models) {
    ProfessionalTraining.belongsTo(models.Professional);
    ProfessionalTraining.belongsTo(models.Training);
  };
  return ProfessionalTraining;
};
