'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    // Assocations
    CompanyId: {
      type: DataTypes.INTEGER
    },

    JobFunctionId: {
      type: DataTypes.INTEGER
    },

    // Geospatial
    location: {
      allowNull: false,
      type: DataTypes.GEOMETRY('POINT'),
    },

    // Meta Data
    title: {
      type: DataTypes.STRING
    },
    level: {
      type: DataTypes.STRING
    },
    function: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    requirements: {
      type: DataTypes.TEXT
    },
    skills: {
      type: DataTypes.TEXT
    },
    useUrl: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    applicationUrl: {
      type: DataTypes.STRING
    },
    useEmail: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    useCseLinkedIn:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    applicationEmail: {
      type: DataTypes.STRING
    },
    applyCounter: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    address: {
      type: DataTypes.STRING
    },

    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    deletedAt: {
      type: DataTypes.DATE,
      defaultValue: null
    },
  }, {});
  Job.associate = function (models) {
    // associations can be defined here
    Job.belongsTo(models.Company);
    Job.belongsTo(models.JobFunction);

    Job.hasMany(models.Featured, {
      foreignKey: 'FeatureableId',
      scope: {
        Featureable: 'Job'
      },
      onDelete: 'CASCADE',
      hooks: true
    });

    Job.hasMany(models.PendingApplication, { onDelete: "CASCADE", hooks: true });
  };
  return Job;
};
