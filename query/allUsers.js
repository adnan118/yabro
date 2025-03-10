const { getAllData } = require("../controllers/functions");
 
const { getConnection } = require("./db");

// دالة لجلب بيانات منتج بناءً على معرفه
async function AllUsers(req, res) {
  try {
    // الحصول على اتصال من تجمع الاتصالات
    const connection = await getConnection(); // الحصول على الاتصال

    // الاستعلام عن جميع المستخدمين
    const [results] = await connection.execute("SELECT * FROM users");

    // تحرير الاتصال بعد الانتهاء
    connection.release();

    res.json({ status: "success", data: results }); // هيكل موحد
    console.log(results);
  } catch (error) {
    console.error("Database query error: ", error);
    res.status(500).json({
      status: "failure",
      message: "There is a problem retrieving data",
    });
  }
}  


// تصدير الدوال
module.exports = { AllUsers };
