'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProfessionalGenInterest = sequelize.define('ProfessionalGenInterest', {
    ProfessionalId: DataTypes.INTEGER,
    GenInterestId: DataTypes.INTEGER
  }, {});
  ProfessionalGenInterest.associate = function(models) {
    ProfessionalGenInterest.belongsTo(models.Professional);
    ProfessionalGenInterest.belongsTo(models.GenInterest);
  };
  return ProfessionalGenInterest;
};
