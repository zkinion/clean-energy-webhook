'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define('Gender', {
    title: DataTypes.STRING
  }, {});
  Gender.associate = function(models) {
    Gender.hasMany(models.ProfessionalGender, { onDelete: "CASCADE", hooks: true });
  };
  return Gender;
};
