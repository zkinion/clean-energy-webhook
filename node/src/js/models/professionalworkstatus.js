'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProfessionalWorkStatus = sequelize.define('ProfessionalWorkStatus', {
    ProfessionalId: DataTypes.INTEGER,
    WorkStatusId: DataTypes.INTEGER
  }, {});
  ProfessionalWorkStatus.associate = function(models) {
    ProfessionalWorkStatus.belongsTo(models.Professional);
    ProfessionalWorkStatus.belongsTo(models.WorkStatus);
  };
  return ProfessionalWorkStatus;
};
