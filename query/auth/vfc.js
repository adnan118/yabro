const { getAllData, updateData } = require("../../controllers/functions"); // تأكد من استيراد الدوال المناسبة
const nodemailer = require("nodemailer"); // استخدم nodemailer لإرسال البريد الإلكتروني

 

// دالة للتحقق من البريد الإلكتروني وكود التحقق
async function VerifyUser(req, res) {
  try {
    const {  email,  verflyCode } = req.body; // الحصول على البريد وكود التحقق من الجسم

    // التحقق من وجود البيانات
    if (!email || !verflyCode) {
      return res.status(400).json({
        status: "failure",
        message: "You must enter your email and verification code.",
      });
    }

    // استرجاع بيانات المستخدم من قاعدة البيانات باستخدام الدالة getAllData
    const result = await getAllData(
      "users",
      "users_email = ? AND users_verflyCode = ?",
      [email, verflyCode]
    );

    // التحقق من النتيجة
    if (result.status === "success" && result.data.length > 0) {
      // تحديث حالة المستخدم إلى معتمد
      const updateResponse = await updateData(
        "users",
        { users_approve: "1" },
        "users_email = ?",
        [email]
      );

      if (updateResponse.status === "success") {
        res.json({ status: "success", message: "User verified successfully." });
      } else {
        res
          .status(500)
          .json({
            status: "failure",
            message: "There was a problem updating user data.",
          });
      }
    } else {
      res.json({
        status: "failure",
        message: "Verification code is incorrect.",
      });
    }
  } catch (error) {
    console.error("Error processing verification: ", error);
    res.status(500).json({
      status: "failure",
      message: "There is a problem verifying the user",
    });
  }
}

// تصدير الدالة
module.exports = { VerifyUser };
