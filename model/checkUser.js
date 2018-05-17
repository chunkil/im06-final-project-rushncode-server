const db = require('../db');



const checkUser = (target, callback) => {
  const sql = `SELECT * FROM users WHERE email='${target}'`;

  db.query(sql, function (err, result) {
    if (err) {
      callback(err, null, null);
    } else {
      console.log(result);
      if (result.length !== 0) {
        callback(null, result[0]);
      } else {
        callback(null, null);
      }

    }
  });
}

module.exports = checkUser;