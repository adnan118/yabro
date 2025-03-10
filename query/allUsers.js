const { getAllData } = require("../controllers/functions");

// دالة لجلب بيانات منتج بناءً على معرفه
async function AllUsers(req, res) {
  try {
     
    res
      .status(500)
      .json({
        status: "1",
        message: "1 q",
      });
    const result = await getAllData("users");
    
    res.json(result);
    console.log(result);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res
      .status(500)
      .json({
        status: "failure",
        message: "There is a problem retrieving data q",
      });
  }
}

// تصدير الدوال
module.exports = { AllUsers };
