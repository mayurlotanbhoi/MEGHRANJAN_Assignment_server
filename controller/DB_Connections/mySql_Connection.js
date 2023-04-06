const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Golubhoi200@",
  database: "cart",
});

module.exports = pool;
