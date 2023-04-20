'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanyAffiliation = sequelize.define('CompanyAffiliation', {
    CompanyId: DataTypes.INTEGER,
    AffiliationId: DataTypes.INTEGER
  }, {});
  CompanyAffiliation.associate = function(models) {
    // associations can be defined here
    CompanyAffiliation.belongsTo(models.Company);
    CompanyAffiliation.belongsTo(models.Affiliation);
  };
  return CompanyAffiliation;
};