const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config("./config.env");

const pool = mysql
  .createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    port: process.env.PORT,
    password: process.env.MYSQL_PASSWORS,
    database: "webrtc",
  })
  .promise();

async function getSupplier() {
  const result = await pool.query("select * from tblsupplier");
  return result[0];
}
async function getSupplier(id) {
  const result = await pool.query("select * from tblsupplier where sysid=?", [
    id,
  ]);
  return result[0];
}
getSupplier(2)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
