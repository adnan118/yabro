// controllers/database.js
const mysql = require("mysql2/promise");

 
/*
const dbConfig = {
  host: "mysql11.serv00.com",
  user: "m1241_smc",
  password: "l#^yVeC2PQgQ!Wd@rPxd",
  database: "m1241_yabrov" 
};
*/
const dbConfig = {  
  host: "mysql.railway.internal",  
  user: "rootana",  
  password: "YrRDAzFHoLEbnSHGffiEAkrrToUKBCnD",  
  database: "railway"
};  
// دالة للحصول على اتصال بقاعدة البيانات
async function getConnection() {
  return await mysql.createConnection(dbConfig);
}



// تصدير الدالة
module.exports = { getConnection };

 
