'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanyAffinityNetwork = sequelize.define('CompanyAffinityNetwork', {
    CompanyId: DataTypes.INTEGER,
    AffinityNetworkId: DataTypes.INTEGER
  }, {});
  CompanyAffinityNetwork.associate = function(models) {
    // associations can be defined here
    CompanyAffinityNetwork.belongsTo(models.Company);
    CompanyAffinityNetwork.belongsTo(models.AffinityNetwork);
  };
  return CompanyAffinityNetwork;
};
