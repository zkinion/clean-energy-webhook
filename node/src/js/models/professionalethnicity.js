'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProfessionalEthnicity = sequelize.define('ProfessionalEthnicity', {
    ProfessionalId: DataTypes.INTEGER,
    EthnicityId: DataTypes.INTEGER
  }, {});
  ProfessionalEthnicity.associate = function(models) {
    ProfessionalEthnicity.belongsTo(models.Professional);
    ProfessionalEthnicity.belongsTo(models.Ethnicity);
  };
  return ProfessionalEthnicity;
};
