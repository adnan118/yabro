const { getAllData, updateData } = require("../../controllers/functions");
const nodemailer = require("nodemailer");  

 

 async function VerifyUser(req, res) {
  try {
    const { users_email, users_verflyCode } = req.body;  

    // التحقق من وجود البيانات
    if (!users_email || !users_verflyCode) {
      return res.status(400).json({
        status: "failure",
        message: "You must enter your email and verification code.",
      });
    }

    const result = await getAllData(
      "userss",
      "users_email = ? AND users_verflyCode = ?",
      [users_email, users_verflyCode]
    );

    // التحقق من النتيجة
    if (result.status === "success" && result.data.length > 0) {
      // تحديث حالة المستخدم إلى معتمد
      const updateResponse = await updateData(
        "userss",
        { users_approve: "1" },
        "users_email = ?",
        [users_email]
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
