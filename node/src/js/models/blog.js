'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    BlogCategoryId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    excerpt: DataTypes.TEXT,
    body: DataTypes.TEXT,
    MediaId: DataTypes.INTEGER,
    AuthorPhotoId: DataTypes.INTEGER,
    dateOfPost: DataTypes.DATEONLY,
  }, {});
  Blog.associate = function(models) {
    // associations can be defined here
    Blog.belongsTo(models.BlogCategory)

    // Has many is a bad way to describe this but fuck it
    Blog.hasMany(models.Featured, {
      foreignKey: 'FeatureableId',
      scope: {
        Featureable: 'Blog'
      },
      onDelete: 'CASCADE', 
      hooks: true
    })

    Blog.hasMany(models.Media, {
      foreignKey: 'MediableId',
      scope: {
        Mediable: 'Blog'
      },
      onDelete: 'CASCADE', 
      hooks: true
    })
  };
  return Blog;
};