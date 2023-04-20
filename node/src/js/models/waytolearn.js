'use strict';
module.exports = (sequelize, DataTypes) => {
  const WayToLearn = sequelize.define('WayToLearn', {
    title: DataTypes.STRING
  }, {});
  WayToLearn.associate = function(models) {
    WayToLearn.hasMany(models.ProfessionalWayToLearn, { onDelete: "CASCADE", hooks: true });
  };
  return WayToLearn;
};
