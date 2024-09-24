import mysql from "mysql2/promise";

// Create the connection pool. The pool-specific settings are the defaults
const connPool = mysql.createPool({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "nc41445524",
  database: "gestion_recipes",
  // waitForConnections: true,
  connectTimeout: false,
  // connectionLimit: 10000000,
});

connPool.getConnection().then(() => {
  console.log("CONNECTED");
});

export default connPool;
