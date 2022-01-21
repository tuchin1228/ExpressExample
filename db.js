
//連接Mysql
const mysql = require("mysql2");

module.exports = mysql.createConnection({
  host: "localhost",
  user: "資料庫使用者名稱",
  password: "資料庫密碼",
  database: "選擇操作的資料庫",
  multipleStatements: true //允許多個SQL指令
})

// module.exports = db.promise();