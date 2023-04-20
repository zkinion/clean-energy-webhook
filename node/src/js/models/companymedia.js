'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanyMedia = sequelize.define('CompanyMedia', {
    category: DataTypes.STRING,
    order: DataTypes.INTEGER,
    CompanyId: DataTypes.INTEGER,
    MediaId: DataTypes.INTEGER
  }, {});
  CompanyMedia.associate = function(models) {
    // associations can be defined here
    CompanyMedia.belongsTo(models.Company)
  };
  return CompanyMedia;
};