'use strict';
module.exports = (sequelize, DataTypes) => {
  const Affiliation = sequelize.define('Affiliation', {
    // Assocation ID
    MediaId: {
      type: DataTypes.INTEGER
    },

    // Meta Data
    title: {
      type: DataTypes.STRING
    },
  }, {});
  Affiliation.associate = function (models) {
    // associations can be defined here
    Affiliation.hasMany(models.CompanyAffiliation, { onDelete: "CASCADE", hooks: true });

    Affiliation.hasMany(models.Media, {
      foreignKey: 'MediableId',
      scope: {
        Mediable: 'Affiliation'
      },
      onDelete: 'CASCADE', 
      hooks: true
    })
  };
  return Affiliation;
};