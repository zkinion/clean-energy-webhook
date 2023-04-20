'use strict';
module.exports = (sequelize, DataTypes) => {
  const Education = sequelize.define('Education', {
    ProfessionalId: DataTypes.INTEGER,
    school: DataTypes.STRING,
    degree: DataTypes.STRING,
    field: DataTypes.STRING,
    location: DataTypes.STRING,
    attending: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    description: DataTypes.TEXT,
    MediaId: DataTypes.INTEGER,
  }, {});
  Education.associate = function (models) {
    // associations can be defined here
    Education.belongsTo(models.Professional);

    Education.hasMany(models.Media, {
      foreignKey: 'MediableId',
      scope: {
        Mediable: 'Education'
      },
      onDelete: 'CASCADE', 
      hooks: true
    })
  };
  return Education;
};