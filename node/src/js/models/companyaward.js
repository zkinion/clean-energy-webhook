'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanyAward = sequelize.define('CompanyAward', {
    CompanyId: DataTypes.INTEGER,
    AwardId: DataTypes.INTEGER
  }, {});
  CompanyAward.associate = function(models) {
    // associations can be defined here
  };
  return CompanyAward;
};