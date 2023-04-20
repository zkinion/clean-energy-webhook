'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProfessionalIndustry = sequelize.define('ProfessionalIndustry', {
    ProfessionalId: DataTypes.INTEGER,
    IndustryId: DataTypes.INTEGER
  }, {});
  ProfessionalIndustry.associate = function(models) {
    // associations can be defined here
    ProfessionalIndustry.belongsTo(models.Professional);
    ProfessionalIndustry.belongsTo(models.Industry);
  };
  return ProfessionalIndustry;
};