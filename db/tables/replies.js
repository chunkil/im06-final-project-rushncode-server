const db = require("../index");

const sql = `CREATE TABLE IF NOT EXISTS replies (
  id INTEGER AUTO_INCREMENT,
  body VARCHAR(255), 
  good INTEGER,    
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  userID INTEGER,
  questionID INTEGER,
  PRIMARY KEY(id),
  FOREIGN KEY (userID) REFERENCES users(id),
  FOREIGN KEY (questionID) REFERENCES posts(id)
) DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("add replies table");
});