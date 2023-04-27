
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
//const AWSXRay = require('aws-xray-sdk');

const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
const env = 'production';
let configPath;
if (env === 'development') {
    configPath = 'test';
} else {
    configPath = env;
}

console.warn('configPath: ', configPath);
const config = require(`${__dirname}/../dbConfig`)[configPath];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    //const model = sequelize.import(path.join(__dirname, file));
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
