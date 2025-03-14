const mysql = require("mysql2/promise");

// إعداد اتصال قاعدة البيانات  
const dbConfig = {  
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};  
// دالة للحصول على اتصال بقاعدة البيانات
async function getConnection() {
  return await mysql.createConnection(dbConfig);
}

// تصدير الدالة
module.exports = { getConnection };
