const { Sequelize, DataTypes } = require('sequelize');
const database = require("../database/db")

const Log = database.define('log', {
id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
  sql: {
    type: DataTypes.STRING,
    allowNull: false
  },
  values: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


module.exports = Log;