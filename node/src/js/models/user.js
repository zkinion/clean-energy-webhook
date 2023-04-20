
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    /** Id's  */
    cognitoId: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
    },
    ProfilePictureId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true 
    },

    /** Meta Data */
    type: {
      type: DataTypes.STRING,
    },
    hearAboutUs: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    yearsSolar: {
      type: DataTypes.STRING
    },
    positionInCompany: {
      type: DataTypes.STRING
    },

    /** Tokens */
    fcmToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.belongsTo(models.Company);
    User.hasOne(models.Professional, {
      onDelete: 'CASCADE', 
      hooks: true
    });
  };
  return User;
};
