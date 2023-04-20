'use strict';
module.exports = (sequelize, DataTypes) => {
  const Industry = sequelize.define('Industry', {
    title: DataTypes.STRING
  }, {});
  Industry.associate = function(models) {
    // associations can be defined here
    Industry.hasMany(models.CompanyIndustry, { onDelete: "CASCADE", hooks: true });
    Industry.hasMany(models.ProfessionalIndustry, { onDelete: "CASCADE", hooks: true });
  };
  return Industry;
};