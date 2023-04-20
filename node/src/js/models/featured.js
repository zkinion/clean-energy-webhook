'use strict';
module.exports = (sequelize, DataTypes) => {
  const Featured = sequelize.define('Featured', {
    Featureable: DataTypes.STRING,
    FeatureableId: DataTypes.INTEGER
  }, {});
  Featured.associate = function(models) {
    // associations can be defined here
  };
  return Featured;
};