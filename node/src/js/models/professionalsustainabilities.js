'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProfSustainability = sequelize.define('ProfSustainability', {
    ProfessionalId: DataTypes.INTEGER,
    SustainabilityId: DataTypes.INTEGER
  }, {});
  ProfSustainability.associate = function(models) {
    // associations can be defined here
    ProfSustainability.belongsTo(models.Professional);
    ProfSustainability.belongsTo(models.Sustainability);
  };
  return ProfSustainability;
};
