const mysql2 = require("mysql2/promise");
const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
});


module.exports={connectDB, connection}