'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanyTestimonial = sequelize.define('CompanyTestimonial', {
    CompanyId: DataTypes.INTEGER,
    employee: DataTypes.STRING,
    testimonial: DataTypes.TEXT,
    MediaId: DataTypes.INTEGER
  }, {});
  CompanyTestimonial.associate = function(models) {
    // associations can be defined here
    CompanyTestimonial.belongsTo(models.Company);
    CompanyTestimonial.hasMany(models.Media, {
      foreignKey: 'MediableId',
      scope: {
        Mediable: 'CompanyTestimonial'
      },
      onDelete: 'CASCADE', 
      hooks: true
    })
  };
  return CompanyTestimonial;
};