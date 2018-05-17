const db = require('../db');


const updateGood = (target, callback) => {
  const sql = `UPDATE questions SET good=good+1 WHERE id=${target}`;

  db.query(sql, function (err, result) {
    if (err) {
      callback(err, false);
    } else {
      callback(null, true);
    }
  });
}

module.exports = updateGood;