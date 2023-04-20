'use strict';
module.exports = (sequelize, DataTypes) => {
  const Award = sequelize.define('Award', {
    // Assocation ID
    MediaId: {
      type: DataTypes.INTEGER
    },

    // Meta Data
    title: {
      type: DataTypes.STRING
    },
  }, {});
  Award.associate = function(models) {
    // associations can be defined here
    Award.hasMany(models.Media, {
      foreignKey: 'MediableId',
      scope: {
        Mediable: 'Award'
      },
      onDelete: 'CASCADE', 
      hooks: true
    })
  };
  return Award;
};