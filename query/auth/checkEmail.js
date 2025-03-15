 const nodemailer = require("nodemailer");
const {
  getAllData,
   sentMail,
} = require("../../controllers/functions");
// دالة لتوليد كود تحقق عشوائي مكون من أحرف وأرقام
function generateVerificationCode(length) {
  const chars =
    "0123456789ABCDEFGHIJKL0123456789MNOPQRSTUVWXYZ01234567890123456789"; // الحروف والأرقام الممكنة
  let code = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    code += chars[randomIndex]; // إضافة حرف أو رقم عشوائي إلى الكود
  }

  return code;
}

async function checkEmail(email) {
 
    try {
      const verificationCode = generateVerificationCode(6); // يمكن تغيير الطول حسب الحاجة

      const { users_email } = req.body;

      // التحقق من وجود البيانات
      if (!users_email) {
        return res.status(400).json({
          status: "failure",
          message: "email must be entered.",
        });
      }

      // التحقق من وجود المستخدم مسبقًا
      const checkUser = await getAllData("userss", "users_email = ? ", [
        users_email,
      ]);

      if (checkUser.status === "success" && checkUser.data.length > 0) {
        // إرسال البريد الإلكتروني برمز التحقق الجديد
        await sentMail(
          users_email,
          "adnanbarakat111@gmail.com",
          "Hello! Yabro",
          "verification Code",
          verificationCode,
          "https://i.pinimg.com/736x/69/a6/2a/69a62a5edc08d755dd8a4ef017e14c63.jpg"
        );
        return res.status(400).json({
          status: "success",
          message: "vfcode send to your email",
        });
      } else {
        return res.status(400).json({
          status: "failure",
          message: "Failed this email not founded.",
        });
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      res.status(500).json({
        status: "failure",
        message: "There is a problem retrieving data",
      });
    }
}

// تصدير الدالة
module.exports = { checkEmail };
