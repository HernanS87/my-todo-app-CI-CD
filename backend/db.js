const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',     // 'db' en Docker-net, localhost al probar local
  port: process.env.DB_PORT || 3306,   
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'MiPass123',
  database: process.env.DB_NAME || 'appdb',
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;
