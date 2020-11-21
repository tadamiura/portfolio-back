const mysql = require('mysql2')
require('dotenv').config()


const dbSettings = typeof process.env.CLEARDB_DATABASE_URL === 'string'
  ? process.env.CLEARDB_DATABASE_URL
  : {
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    database: process.env.SQL_NAME,
    password: process.env.SQL_PASSWORD

  }
const connection = mysql.createPool(dbSettings)

module.exports = { connection }
