// controllers/database.js
const mysql = require("mysql2/promise");

// إعداد اتصال قاعدة البيانات
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "dbnodejs",
};

// دالة للحصول على اتصال بقاعدة البيانات
async function getConnection() {
  return await mysql.createConnection(dbConfig);
}



// تصدير الدالة
module.exports = { getConnection };
