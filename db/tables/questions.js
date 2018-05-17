const db = require("../index");

const sql = `CREATE TABLE IF NOT EXISTS questions (
  id INTEGER AUTO_INCREMENT,
  title VARCHAR(255), 
  body MEDIUMTEXT, 
  good INTEGER DEFAULT 0,  
  view INTEGER DEFAULT 0,  
  reward INTEGER DEFAULT 0, 
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  userID INTEGER,
  PRIMARY KEY(id),
  FOREIGN KEY (userID) REFERENCES users(id)
) DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("add questions table");
});