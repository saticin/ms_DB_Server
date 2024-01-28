import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config("./config.env");

export const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  port: process.env.PORT,
  password: process.env.MYSQL_PASSWORS,
  database: "webrtc",
});
