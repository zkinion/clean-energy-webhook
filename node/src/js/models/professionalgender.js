'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProfessionalGender = sequelize.define('ProfessionalGender', {
    ProfessionalId: DataTypes.INTEGER,
    GenderId: DataTypes.INTEGER
  }, {});
  ProfessionalGender.associate = function(models) {
    ProfessionalGender.belongsTo(models.Professional);
    ProfessionalGender.belongsTo(models.Gender);
  };
  return ProfessionalGender;
};
