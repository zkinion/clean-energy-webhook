'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanySustainability = sequelize.define('CompanySustainability', {
    CompanyId: DataTypes.INTEGER,
    SustainabilityId: DataTypes.INTEGER
  }, {});
  CompanySustainability.associate = function(models) {
    // associations can be defined here
    CompanySustainability.belongsTo(models.Company);
    CompanySustainability.belongsTo(models.Sustainability);
  };
  return CompanySustainability;
};
