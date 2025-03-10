// server.js

const express              = require("express");
const UserRoutes           = require("./routes/allUsers");
const LoginUserRout        = require("./routes/authRoutes/LoginUserRout");
const RegisterUserRout     = require("./routes/authRoutes/RegisterUserRout");
const VerifyUserRout       = require("./routes/authRoutes/VfcRout");
const ResendVerifyUserRout = require("./routes/authRoutes/ResendVfcUserRout");

const app = express();
const PORT = process.env.PORT || 3000;
// app.use(express.urlencoded({ extended: false }));  // هذا مطلوب لـ x-www-form-urlencoded
app.use(express.json());
 
 const mysql = require("mysql2/promise");

// إعداد اتصال قاعدة البيانات
/*
const dbConfig = {
  host: "mysql11.serv00.com",
  user: "m1241_yabro",
  password: "Yabro.2025",
  database: "m1241_yabro" 
};
*/
const dbConfig = {  
  host: process.env.DB_HOST,  
  user: process.env.DB_USER,  
  password: process.env.DB_PASSWORD,  
  database: process.env.DB_DATABASE  
};  
// دالة للحصول على اتصال بقاعدة البيانات
async function getConnection() {
 res.json({ message: "Hello, conn!" });  
  return await mysql.createConnection(dbConfig);
 
}


app.get("/", (req, res) => {  
//res.json({ message: "Hello, world!" }); 
 getConnection();
 
 });  
app.use("/api118259y", LoginUserRout);
app.use("/api118259y", UserRoutes);
app.use("/api118259y", RegisterUserRout);
app.use("/api118259y", VerifyUserRout);
app.use("/api118259y", ResendVerifyUserRout);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
