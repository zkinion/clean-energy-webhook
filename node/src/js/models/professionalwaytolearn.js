'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProfessionalWayToLearn = sequelize.define('ProfessionalWayToLearn', {
    ProfessionalId: DataTypes.INTEGER,
    WayToLearnId: DataTypes.INTEGER
  }, {});
  ProfessionalWayToLearn.associate = function(models) {
    ProfessionalWayToLearn.belongsTo(models.Professional);
    ProfessionalWayToLearn.belongsTo(models.WayToLearn);
  };
  return ProfessionalWayToLearn;
};
