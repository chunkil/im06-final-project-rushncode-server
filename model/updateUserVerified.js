const db = require('../db');


const updateUserVerified = (email, callback) => {
  const sql = `UPDATE users SET verified=1 WHERE email = '${email}'`;

  db.query(sql, function (err, result) {
    if (err) {
      callback(err, false);
    } else {
      callback(null, true);
    }
  });
}

module.exports = updateUserVerified;