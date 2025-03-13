const mysql = require("mysql2/promise");

// إعداد اتصال قاعدة البيانات  
const dbConfig = {  
host: "mysql.railway.internal",
  user: "root",
  password: "OJqazGQGUuBRhygpsVpDefAHKacQgKgg",
  database: "railway" ,
};  
// دالة للحصول على اتصال بقاعدة البيانات
async function getConnection() {
  return await mysql.createConnection(dbConfig);
}

// تصدير الدالة
module.exports = { getConnection };
