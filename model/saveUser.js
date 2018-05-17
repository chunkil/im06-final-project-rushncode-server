const db = require('../db');


const saveUser = (target, callback) => {
  const sql = `INSERT INTO users(email, username, password) 
                VALUES('${target.email}', '${target.username}', '${target.password}')`;

  db.query(sql, function (err, result) {
    if (err) {
      callback(err, false);
    } else {
      console.log(result);
      callback(null, true);
    }
  });
}

module.exports = saveUser;