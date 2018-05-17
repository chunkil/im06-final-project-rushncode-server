const db = require('../db');



const getNotVerifiedEmails = (id, callback) => {
  const sql = `SELECT email FROM users WHERE id=${id}`;

  db.query(sql, function (err, result) {
    if (err) {
      callback(err, null, null);
    } else {
      //console.log(result);
      if (result.length !== 0) {
        callback(null, result);
      } else {
        callback(null, null);
      }

    }
  });
}

module.exports = getNotVerifiedEmails;