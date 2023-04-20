'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define('Experience', {
    ProfessionalId: DataTypes.INTEGER,
    jobTitle: DataTypes.STRING,
    company: DataTypes.STRING,
    location: DataTypes.STRING,
    currentJob: DataTypes.BOOLEAN,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    description: DataTypes.TEXT,
    MediaId: DataTypes.INTEGER,
  }, {});
  Experience.associate = function(models) {
    // associations can be defined here
    Experience.belongsTo(models.Professional);

    Experience.hasMany(models.Media, {
      foreignKey: 'MediableId',
      scope: {
        Mediable: 'Experience'
      },
      onDelete: 'CASCADE', 
      hooks: true
    })
  };
  return Experience;
};