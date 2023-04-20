'use strict';
module.exports = (sequelize, DataTypes) => {
  const JobFunction = sequelize.define('JobFunction', {
    title: DataTypes.STRING
  }, {});
  JobFunction.associate = function(models) {
    // associations can be defined here
    JobFunction.hasMany(models.ProfessionalJobFunction, { onDelete: "CASCADE", hooks: true });
    JobFunction.hasMany(models.Job);
  };
  return JobFunction;
};