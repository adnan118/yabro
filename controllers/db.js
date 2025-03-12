/*// controllers/database.js
const mysql = require("mysql2/promise");

 

const dbConfig = {
  host: "mysql11.serv00.com",
  user: "m1241_smc",
  password: "l#^yVeC2PQgQ!Wd@rPxd",
  database: "m1241_smc" 
};
/*
const dbConfig = {  
  host: process.env.DB_HOST,  
  user: process.env.DB_USER,  
  password: process.env.DB_PASSWORD,  
  database: process.env.DB_DATABASE  
};  
// دالة للحصول على اتصال بقاعدة البيانات
async function getConnection() {
  return await mysql.createConnection(dbConfig);
}



// تصدير الدالة
module.exports = { getConnection };


*/

// controllers/database.js  
require("dotenv").config();  
const { neon } = require("@neondatabase/serverless");  

const sql = neon(DATABASE_URL='postgresql://neondb_owner:npg_TBcjMd8h9lqp@ep-curly-queen-a26ytq8m-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require'); // استخدم رابط قاعدة البيانات من .env  

// دالة لتنفيذ استعلام  
async function executeQuery(query) {  
  const result = await sql`${query}`;  
  return result;  
}  

// تصدير الدالة  
module.exports = { executeQuery };  
