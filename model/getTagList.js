const db = require("../db");

const getTagList = (callback) => {
  const sql = `SELECT * FROM tags`;
  db.query(sql, function (err, result) {
    if (err) {
      callback(err, null);
    } else {
      if (result.length !== 0) {
        callback(null, result);
      } else {
        callback(null, null);
      }
    }
  });
};

module.exports = getTagList;