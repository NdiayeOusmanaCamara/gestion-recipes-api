const pool = require('../src/config/db');


const connect =  pool.getConnection();

console.log(connect);
