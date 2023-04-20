'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProfessionalService = sequelize.define('ProfessionalService', {
    ProfessionalId: DataTypes.INTEGER,
    ServiceId: DataTypes.INTEGER
  }, {});
  ProfessionalService.associate = function(models) {
    ProfessionalService.belongsTo(models.Professional);
    ProfessionalService.belongsTo(models.Service);
  };
  return ProfessionalService;
};
