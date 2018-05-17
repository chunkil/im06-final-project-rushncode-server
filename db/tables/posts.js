const db = require("../index");

const sql = `CREATE TABLE IF NOT EXISTS posts (
  id INTEGER AUTO_INCREMENT,
  title VARCHAR(255), 
  body VARCHAR(255), 
  good INTEGER,    
  reward INTEGER, 
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  userID INTEGER,
  PRIMARY KEY(id),
  FOREIGN KEY (userID) REFERENCES users(id)
) DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("add posts table");
});