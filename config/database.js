const mysql = require("mysql");

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'Reinhole87!',
database: 'passport_demo'
});

module.exports = connection;
