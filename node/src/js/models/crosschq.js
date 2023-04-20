'use strict';
module.exports = (sequelize, DataTypes) => {
  const Crosschq = sequelize.define('Crosschq', {
    // IDs
    crosschqId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
      comment: 'Crosschq Reference Request identifier'
    },
    ProfessionalId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Professionals',
        key: 'id',
        as: 'ProfessionalId'
      }
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Companies',
        key: 'id',
        as: 'CompanyId'
      }
    },
    // Data
    status: {
      type: DataTypes.STRING,
      comment: 'Reference Request status'
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Reference Request Report link'
    },
  });
  Crosschq.associate = function (models) {
    // associations can be defined here
    Crosschq.belongsTo(models.Company);
    Crosschq.belongsTo(models.Professional);
  };

  return Crosschq;
};
