'use strict';
module.exports = (sequelize, DataTypes) => {
  const PendingApplication = sequelize.define('PendingApplication', {
    ProfessionalId: DataTypes.INTEGER,
    JobId: DataTypes.INTEGER,
    favorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {});
  PendingApplication.associate = function(models) {
    PendingApplication.belongsTo(models.Professional);
    PendingApplication.belongsTo(models.Job);
  };
  return PendingApplication;
};
