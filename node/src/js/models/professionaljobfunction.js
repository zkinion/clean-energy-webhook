'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProfessionalJobFunction = sequelize.define('ProfessionalJobFunction', {
    ProfessionalId: DataTypes.INTEGER,
    JobFunctionId: DataTypes.INTEGER
  }, {});
  ProfessionalJobFunction.associate = function(models) {
    // associations can be defined here
    ProfessionalJobFunction.belongsTo(models.Professional);
    ProfessionalJobFunction.belongsTo(models.JobFunction);
    // associations can be defined here
  };
  return ProfessionalJobFunction;
};