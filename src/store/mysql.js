const Sequelize = require("sequelize");
const config = require("../config/db.config");
const mysql2 = require("mysql2/promise");

const {
  HOST: host,
  DB_PORT: port,
  USER: user,
  PASSWORD: password,
  DB: database,
  dialect,
} = config;

const initialize = async () => {
  const connection = await mysql2.createConnection({
    host,
    user,
    password,
    database,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
};

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host,
    dialect,
    operatorsAliases: 0, //1 for true
  }
);

module.exports = { initialize, sequelize };
