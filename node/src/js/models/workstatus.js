'use strict';
module.exports = (sequelize, DataTypes) => {
  const WorkStatus = sequelize.define('WorkStatus', {
    title: DataTypes.STRING
  }, {});
  WorkStatus.associate = function(models) {
    WorkStatus.hasMany(models.ProfessionalWorkStatus, { onDelete: "CASCADE", hooks: true });
  };
  return WorkStatus;
};
