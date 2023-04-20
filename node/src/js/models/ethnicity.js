'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ethnicity = sequelize.define('Ethnicity', {
    title: DataTypes.STRING
  }, {});
  Ethnicity.associate = function(models) {
    Ethnicity.hasMany(models.ProfessionalEthnicity, { onDelete: "CASCADE", hooks: true });
  };
  return Ethnicity;
};
