// controllers/database.js
const mysql = require("mysql2/promise");

 

const dbConfig = {
  host: "mysql11.serv00.com",
  user: "m1241",
  password: "l#^yVeC2PQgQ!Wd@rPxd",
  database: "m1241_smc" 
};
/*
const dbConfig = {  
  host: process.env.DB_HOST,  
  user: process.env.DB_USER,  
  password: process.env.DB_PASSWORD,  
  database: process.env.DB_DATABASE  
};  */
// دالة للحصول على اتصال بقاعدة البيانات
async function getConnection() {
  return await mysql.createConnection(dbConfig);
}



// تصدير الدالة
module.exports = { getConnection };




