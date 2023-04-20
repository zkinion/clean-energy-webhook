'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    title: DataTypes.STRING
  }, {});
  Service.associate = function(models) {
    Service.hasMany(models.ProfessionalService, { onDelete: "CASCADE", hooks: true });
  };
  return Service;
};
