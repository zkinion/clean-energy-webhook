'use strict';
module.exports = (sequelize, DataTypes) => {
  const Perk = sequelize.define('Perk', {
    /** Assocations  */
    CategoryId: {
      type: DataTypes.INTEGER
    },

    /** Meta */
    title: {
      type: DataTypes.STRING
    },

  }, {});
  Perk.associate = function (models) {
    // associations can be defined here
    Perk.belongsTo(models.Category);
    Perk.hasMany(models.CompanyPerk, { onDelete: "CASCADE", hooks: true });
    Perk.belongsToMany(models.Company, {
      through: models.CompanyPerk,
      as: "Company",
      foreignKey: "PerkId"
    })
    
  };
  return Perk;
};