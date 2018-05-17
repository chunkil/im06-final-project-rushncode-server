const db = require('../db');


const updateView = (target, callback) => {
  const sql = `UPDATE questions SET view=view+1 WHERE id=${target}`;

  db.query(sql, function (err, result) {
    if (err) {
      callback(err, false);
    } else {
      callback(null, true);
    }
  });
}

module.exports = updateView;