//const AWS = require('aws-xray');
//const s3 = new AWS.S3()

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define('Media', {
    MediableId: DataTypes.INTEGER,
    Mediable: DataTypes.STRING,
    /** Meta Data */
    width: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    ETag: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bucket: {
      type: DataTypes.STRING,
      allowNull: true
    },
    key: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    size: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    embedURL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isProcessed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  }, {});
  Media.associate = function(models) {
    // associations can be defined here
  };

  Media.addHook('afterDestroy', 'remove-s3-image', async (media, options) => {
    if (!media) {
      return
    }
    if (!(media instanceof Array)) {
      media = [media]
    }
    media = media.filter(m => m.key);
    if (!media.length) {
      return;
    }

    await s3.deleteObjects({
      Bucket: process.env.MediaBucket,
      Delete: {
        Objects: media.map(item => {
          let key = decodeURIComponent(item.key.replace(/\+/g, ' '))
          return {
            Key: key
          }
        })
      }
    }).promise();

    return true;
  })
  return Media;
};