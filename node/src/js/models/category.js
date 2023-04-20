'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    MediaId: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    // Category.belongsTo(models.Media, { onDelete: "CASCADE", hooks: true});
    Category.hasMany(models.Perk, { onDelete: "CASCADE", hooks: true});

    Category.hasMany(models.Media, {
      foreignKey: 'MediableId',
      scope: {
        Mediable: 'Category'
      },
      onDelete: 'CASCADE', 
      hooks: true
    })
  };
  return Category;
};