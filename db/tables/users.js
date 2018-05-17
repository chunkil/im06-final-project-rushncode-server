const db = require("../index");

const sql = `CREATE TABLE IF NOT EXISTS users (
  id INTEGER AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL, 
  username VARCHAR(255) NOT NULL, 
  password VARCHAR(255) NOT NULL,     
  total_reward INTEGER DEFAULT 0, 
  verified BOOLEAN DEFAULT FALSE, 
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
) DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("add users table");
});