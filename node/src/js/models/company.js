'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    /** Assocations */
    OwnerId: {
      type: DataTypes.STRING
    },
    LogoId: {
      type: DataTypes.INTEGER
    },
    BannerId: {
      type: DataTypes.INTEGER
    },
    /** Stripe Assocation */
    subscriptionPlanId: {
      type: DataTypes.STRING
    },
    subscriptionStatus: {
      type: DataTypes.STRING
    },
    subscriptionNickname: {
      type: DataTypes.STRING
    },
    subscriptionActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    subscriptionCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    customerId: {
      type: DataTypes.STRING
    },
    /** Meta Data */
    size: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    show: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    impact: {
      type: DataTypes.TEXT
    },
    mission: {
      type: DataTypes.TEXT
    },
    recruitmentTemplate: {
      type: DataTypes.STRING
    },
    primaryContactEmail: {
      type: DataTypes.STRING
    },
    primaryContactPhone: {
      type: DataTypes.STRING
    },

    /** Urls */
    website: {
      type: DataTypes.STRING
    },
    facebook: {
      type: DataTypes.STRING
    },
    twitter: {
      type: DataTypes.STRING
    },
    linkedIn: {
      type: DataTypes.STRING
    },
    instagram: {
      type: DataTypes.STRING
    },
    LinkedInId: {
      type: DataTypes.STRING
    },

    hubspotId: DataTypes.STRING,
  }, {});
  Company.associate = function (models) {
    // associations can be defined here
    Company.hasMany(models.Job, { onDelete: "CASCADE", hooks: true });
    Company.hasMany(models.CompanyTestimonial, { onDelete: "CASCADE", hooks: true });

    Company.hasMany(models.CompanyAffiliation, { onDelete: "CASCADE", hooks: true });
    Company.hasMany(models.CompanyIndustry, { onDelete: "CASCADE", hooks: true });
    Company.hasMany(models.User);

    Company.hasMany(models.CompanyPerk, { onDelete: "CASCADE", hooks: true });
    Company.belongsToMany(models.Perk, {
      through: models.CompanyPerk,
      as: "Perk",
      foreignKey: "CompanyId"
    })

    Company.hasMany(models.CompanyMedia, {
      onDelete: "CASCADE",
      hooks: true
    })

    Company.hasMany(models.Media, {
      foreignKey: 'MediableId',
      scope: {
        Mediable: 'Company'
      },
      onDelete: 'CASCADE',
      hooks: true
    })

    Company.hasMany(models.Address, {
      foreignKey: 'AddressableId',
      scope: {
        Addressable: 'Company'
      },
      onDelete: 'CASCADE',
      hooks: true
    })

    // Has many is a bad way to describe this but fuck it
    Company.hasMany(models.Featured, {
      foreignKey: 'FeatureableId',
      scope: {
        Featureable: 'Company'
      },
      onDelete: 'CASCADE',
      hooks: true
    })

    Company.hasMany(models.Crosschq, { onDelete: "CASCADE", hooks: true });
    Company.belongsToMany(models.Professional, {
      through: models.Crosschq,
      foreignKey: "CompanyId"
    });

  };
  return Company;
};
