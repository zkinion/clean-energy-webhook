'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    AddressableId: DataTypes.INTEGER,
    Addressable: DataTypes.STRING,

    // Geospatial
    location: {
      allowNull: false,
      type: DataTypes.GEOMETRY('POINT'),
    },
    
    /** Meta */
    addressInfo: {
      type: DataTypes.TEXT
    },
    isPrimary: {
      type: DataTypes.BOOLEAN
    },
    formattedLocation: {
      type: DataTypes.STRING
    },
    addressLine1: {
      type: DataTypes.STRING
    },
    addressLine2: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    zip: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    }
  }, {});
  Address.associate = function (models) {
    // associations can be defined here
  };
  return Address;
};