// server.js  
const express = require("express");  
const userRoutes = require("./routes/allUsers");  
const loginUserRoute = require("./routes/authRoutes/LoginUserRout");  
const registerUserRoute = require("./routes/authRoutes/RegisterUserRout");  
const verifyUserRoute = require("./routes/authRoutes/VfcRout");  
const resendVerifyUserRoute = require("./routes/authRoutes/ResendVfcUserRout");  
const getConnection = require("./controllers/db/getConnection");  

const app = express();  
const PORT = process.env.PORT || 3000;  

app.use(express.json());  

app.get("/", async (req, res) => {  
  try {  
    await getConnection();  
    res.json({ message: "Connected to the database successfully!" });  
  } catch (error) {  
    console.error(error);  
    res.status(500).json({ message: "Database connection failed." });  
  }  
});  

app.use("/api118259y", loginUserRoute);  
app.use("/api118259y", userRoutes);  
app.use("/api118259y", registerUserRoute);  
app.use("/api118259y", verifyUserRoute);  
app.use("/api118259y", resendVerifyUserRoute);  

app.listen(PORT, () => {  
  console.log(`Server is running on http://localhost:${PORT}`);  
});  
