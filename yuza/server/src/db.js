const mysql = require('mysql2');
//require('dotenv').config({ path: '../.env' });
require('dotenv').config();
console.log('user:', process.env.DB_USER);
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();