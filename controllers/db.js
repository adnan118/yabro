// controllers/database.js
const mysql = require("mysql2/promise");

// إعداد اتصال قاعدة البيانات
const dbConfig = {
  host: "mysql11.serv00.com",
  user: "m1241_yabro",
  password: "Yabro.2025",
  database: "m1241_yabro",
};

// دالة للحصول على اتصال بقاعدة البيانات
async function getConnection() {
  return await mysql.createConnection(dbConfig);
}



// تصدير الدالة
module.exports = { getConnection };




