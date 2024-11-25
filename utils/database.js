const mysql = require("mysql2");


const pool = mysql.createPool(
    {
        host : "localhost",
        user : "root",
        password : "Sara7763377",
        database : "coder's_hub"
    }
)


module.exports = pool.promise()
