'use strict';
module.exports = (sequelize, DataTypes) => {
  const BlogCategory = sequelize.define('BlogCategory', {
    title: DataTypes.STRING
  }, {});
  BlogCategory.associate = function(models) {
    // associations can be defined here
    BlogCategory.hasMany(models.Blog);
  };
  return BlogCategory;
};