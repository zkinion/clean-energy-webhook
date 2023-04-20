'use strict';
module.exports = (sequelize, DataTypes) => {
  const Training = sequelize.define('Training', {
    title: DataTypes.STRING
  }, {});
  Training.associate = function(models) {
    Training.hasMany(models.ProfessionalTraining, { onDelete: "CASCADE", hooks: true });
  };
  return Training;
};
