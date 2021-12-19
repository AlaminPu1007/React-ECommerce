require('dotenv').config();
const mysql = require("mysql");

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  connectionLimit: 10,
  debug :  false
});

module.exports = connection;
