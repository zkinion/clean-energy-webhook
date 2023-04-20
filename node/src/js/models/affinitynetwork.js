'use strict';
module.exports = (sequelize, DataTypes) => {
  const AffinityNetwork = sequelize.define('AffinityNetwork', {
    title: DataTypes.STRING
  }, {});
  AffinityNetwork.associate = function(models) {
    // associations can be defined here
    AffinityNetwork.hasMany(models.CompanyAffinityNetwork, { onDelete: "CASCADE", hooks: true });
  };
  return AffinityNetwork;
};
