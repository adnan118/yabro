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
app.get("/", (req, res) => {  
  res.send("مرحبا!");  
});  
app.use("/api118259y", LoginUserRout);
app.use("/api118259y", UserRoutes);
app.use("/api118259y", RegisterUserRout);
app.use("/api118259y", VerifyUserRout);
app.use("/api118259y", ResendVerifyUserRout);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
