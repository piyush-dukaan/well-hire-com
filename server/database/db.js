require("dotenv").config();
const { Model, DataTypes, Op, Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.dburi, { logging: false });

module.exports = { sequelize, Model, Sequelize, DataTypes };
