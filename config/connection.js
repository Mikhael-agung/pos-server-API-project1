const mysql = require('mysql');
const env = require('dotenv');

env.config();

// konfigurasi database credentials | nilainya dari file .env 👇
const connection = mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME
});

connection.connect((err) => {
    if(err){
        console.log("error ",err)
    }
    console.log('connect')
});

module.exports = connection;