require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

// Reading, importing and pushing all models into modelDefiners array
const modelDefiners = [];
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Sequelize injection
modelDefiners.forEach(model => model(sequelize));

// Model name capitalization ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// Get models from destructuring sequelize.models
const { Balance, Transaction } = sequelize.models;

// Entity relations
//  .hasOne     .hasMany    .belongsTo  .belongsToMany
Balance.hasMany(Transaction);
Transaction.belongsTo(Balance);

module.exports = {
  ...sequelize.models, // To be imported as models in routes.
  conn: sequelize,     // To be imported as connection @ 'api/index.js'.
};
