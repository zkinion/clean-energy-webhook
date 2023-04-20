'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanyIndustry = sequelize.define('CompanyIndustry', {
    CompanyId: DataTypes.INTEGER,
    IndustryId: DataTypes.INTEGER
  }, {});
  CompanyIndustry.associate = function(models) {
    // associations can be defined here
    CompanyIndustry.belongsTo(models.Company);
    CompanyIndustry.belongsTo(models.Industry);
    // associations can be defined here
  };
  return CompanyIndustry;
};