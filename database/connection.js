const mysql2 = require("mysql2/promise");
//load mysql2 library, promise based APIm createConnection returns Promises—allowing you to await them instead of using callbacks.
require('dotenv').config()
let connection = null;
async function connectDB(){
    if (connection){
        return connection
    }
    connection=await mysql2.createConnection({
        host: process.env.DB_HOST, //hostname of sql server
        user: process.env.DB_ROOT,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    })
    console.log('connect to the database')
}
// const connection = mysql2.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "test",
// });

//This is a basic form of a “singleton” or “connection-pooling” pattern: ensure only one connection is ever opened and reused
module.exports={connectDB, connection}
