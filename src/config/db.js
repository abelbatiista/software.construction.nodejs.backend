const mysql = require('mysql2');
const ENV = require('./env');

const pool = mysql.createPool({
  host: ENV.database.host,
  user: ENV.database.user,
  password: ENV.database.password,
  database: ENV.database.name,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const DB = pool.promise();

module.exports = DB;
