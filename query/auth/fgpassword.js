const { getAllData, updateData } = require("../../controllers/functions"); 
 
async function FgPassword(req, res) {
  try {
    const { users_email, users_password } = req.body; // الحصول على البريد وكود التحقق من الجسم

    // التحقق من وجود البيانات
    if (!users_email || !users_password) {
      return res.status(400).json({
        status: "failure",
        message: "You must enter your email and password .",
      });
    }

    
  
        const hashedPassword = await bcrypt.hash(users_password, 10);

        const data = {
          users_password: hashedPassword, 
        };

        // تحديث كود التحقق في قاعدة البيانات
        const result = await updateData("userss", data, "users_email = ?", [
          users_email,
        ]);

        if (result.status === "success") {
           
          res.json({
            status: "success",
            message: "changed password successfully",
          });
        } else {
          res.json({
            status: "failure",
            message: "Failed changed password.",
          });
      }
      
 
   
  } catch (error) {
    console.error("Error processing reset password: ", error);
    res.status(500).json({
      status: "failure",
      message: "There is a problem reset password",
    });
  }
}

// تصدير الدالة
module.exports = { FgPassword };
