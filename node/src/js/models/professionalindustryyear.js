'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProfessionalIndustryYear = sequelize.define('ProfessionalIndustryYear', {
    ProfessionalId: DataTypes.INTEGER,
    IndustryYearId: DataTypes.INTEGER
  }, {});
  ProfessionalIndustryYear.associate = function(models) {
    ProfessionalIndustryYear.belongsTo(models.Professional);
    ProfessionalIndustryYear.belongsTo(models.IndustryYear);
  };
  return ProfessionalIndustryYear;
};
