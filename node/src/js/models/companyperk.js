'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanyPerk = sequelize.define('CompanyPerk', {
    CompanyId: DataTypes.INTEGER,
    PerkId: DataTypes.INTEGER
  }, {});
  CompanyPerk.associate = function(models) {
    // associations can be defined here
    CompanyPerk.belongsTo(models.Company);
    CompanyPerk.belongsTo(models.Perk);
  };
  return CompanyPerk;
};