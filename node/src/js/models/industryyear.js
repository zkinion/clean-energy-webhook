'use strict';
module.exports = (sequelize, DataTypes) => {
  const IndustryYear = sequelize.define('IndustryYear', {
    title: DataTypes.STRING
  }, {});
  IndustryYear.associate = function(models) {
    IndustryYear.hasMany(models.ProfessionalIndustryYear, { onDelete: "CASCADE", hooks: true });
  };
  return IndustryYear;
};
