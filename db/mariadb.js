
require("dotenv").config();

const mariaDB = require('mariadb');
const db = mariaDB.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_DATABASE,
    connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT) // 연결 풀의 최대 연ㄴ결수
})

  
module.exports = db;