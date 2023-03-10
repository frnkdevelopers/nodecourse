//const config = require("../config/db.config.js");
const Sequelize = require('sequelize');
const { initialize, sequelize } = require('../store/mysql');

const db = {};

initialize();

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('./user.model.js')(sequelize, Sequelize);

/*
db.genders.hasMany(db.users);
db.users.belongsTo(db.genders, {
  foreignKey: "genderId",
});*/

module.exports = db;
