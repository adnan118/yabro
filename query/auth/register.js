const {
  getAllData,
  insertData,
  sentMail,
} = require("../../controllers/functions");
const bcrypt = require("bcrypt");

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

// دالة لتسجيل مستخدم جديد
async function RegisterUser(req, res) {
  try {
    const { email, password, phone } = req.body;
    
    // الحصول على الجزء قبل علامة "@"
    const username = email.split("@")[0];

    
    // التحقق من وجود البيانات
    if (!email || !password || !phone) {
      return res.status(400).json({
        status: "failure",
        message: "All information must be entered.",
      });
    }

    // التحقق من وجود المستخدم مسبقًا
    const checkUser = await getAllData(
      "users",
      "users_email = ? OR users_phone = ?",
      [email, phone]
    );

 

    // تشفير كلمة المرور
    const hashedPassword = await bcrypt.hash(password, 10);

    // توليد كود تحقق عشوائي مكون من أحرف وأرقام
    const verificationCode = generateVerificationCode(6); // يمكن تغيير الطول حسب الحاجة

    // إدخال البيانات في قاعدة البيانات
    const userData = {
      users_name: username,
      users_email: email,
      users_password: hashedPassword,
      users_phone: phone,
      users_verflyCode: verificationCode, // إضافة كود التحقق هنا
    };




   if (checkUser.status === "success" && checkUser.data.length > 0) {
     // إرسال البريد الإلكتروني برمز التحقق الجديد
     await sentMail(
       email,
       "adnanbarakat111@gmail.com",
       "Hello! Yabro",
       verificationCode,
       "https://i.pinimg.com/736x/69/a6/2a/69a62a5edc08d755dd8a4ef017e14c63.jpg"
     );
     return res.status(400).json({
       status: "failure",
       message: "User already exists with this email or phone.",
     });
   }

   else {
     const result = await insertData("users", userData);

     if (result.status === "success") {
       res.json({
         status: "success",
         message: "User registered successfully.",
       });
     } else {
       res.status(500).json({
         status: "failure",
         message: "Failed to register user.",
       });
     }
    }
  } catch (error) {
    console.error("Error registering user: ", error);
    res.status(500).json({
      status: "failure",
      message: "There is a problem registering the user.",
    });
  }
}

// تصدير الدالة
module.exports = { RegisterUser };
