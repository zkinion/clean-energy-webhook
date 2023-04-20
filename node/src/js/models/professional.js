'use strict';
module.exports = (sequelize, DataTypes) => {
  const Professional = sequelize.define('Professional', {
    UserId: DataTypes.INTEGER,

    ResumeId: DataTypes.INTEGER,
    ProfilePictureId: DataTypes.INTEGER,
    CoverId: DataTypes.INTEGER,

    show: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    jobHeadline: DataTypes.STRING,
    yearsSolar: DataTypes.STRING,
    summary: DataTypes.TEXT,
    awards: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    skills: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    twitter: DataTypes.STRING,
    linkedIn: DataTypes.STRING,
    website: DataTypes.STRING,
    email: DataTypes.STRING,
    isEmailVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    sendNotificationsToPrimaryEmail: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    sendNotificationsToAlternativeEmail: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    phone: DataTypes.STRING,

    hubspotId: DataTypes.STRING,

    /** Stripe properties */
    subscriptionPlanId: {
      type: DataTypes.STRING
    },
    subscriptionStatus: {
      type: DataTypes.STRING
    },
    subscriptionNickname: {
      type: DataTypes.STRING
    },
    subscriptionCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    customerId: {
      type: DataTypes.STRING
    },

    communicationFrequency: {
      type: DataTypes.STRING
    },
    companyName: DataTypes.STRING,
    title: DataTypes.STRING,
  }, {});
  Professional.associate = function(models) {
    // associations can be defined here
    Professional.hasMany(models.Education, { onDelete: "CASCADE", hooks: true })
    Professional.hasMany(models.Experience, { onDelete: "CASCADE", hooks: true })
    Professional.hasMany(models.ProfessionalIndustry, { onDelete: "CASCADE", hooks: true });
    Professional.hasMany(models.ProfessionalJobFunction, { onDelete: "CASCADE", hooks: true });
    Professional.hasMany(models.PendingApplication, { onDelete: "CASCADE", hooks: true });
    Professional.belongsTo(models.User);

    // Has many is a bad way to describe this but fuck it
    Professional.hasMany(models.Featured, {
      foreignKey: 'FeatureableId',
      scope: {
        Featureable: 'Professional'
      },
      onDelete: 'CASCADE',
      hooks: true
    })

    Professional.hasMany(models.Media, {
      foreignKey: 'MediableId',
      scope: {
        Mediable: 'Professional'
      },
      onDelete: 'CASCADE',
      hooks: true
    })

    Professional.hasMany(models.Crosschq, { onDelete: "CASCADE", hooks: true });
    Professional.belongsToMany(models.Company, {
      through: models.Crosschq,
      foreignKey: "ProfessionalId"
    });

  };
  return Professional;
};
