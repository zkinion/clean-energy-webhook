'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProfessionalDevInterest = sequelize.define('ProfessionalDevInterest', {
    ProfessionalId: DataTypes.INTEGER,
    DevInterestId: DataTypes.INTEGER
  }, {});
  ProfessionalDevInterest.associate = function(models) {
    ProfessionalDevInterest.belongsTo(models.Professional);
    ProfessionalDevInterest.belongsTo(models.DevInterest);
  };
  return ProfessionalDevInterest;
};
