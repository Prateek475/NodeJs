const mysql = require('mysql2');

const pool = mysql.createPool({
  host : "localhost",
  user : "root",
  password : "Hanuman@2006",
  database : "airbnb",
});

module.exports = pool.promise();