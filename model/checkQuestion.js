const db = require('../db');



const checkQuestion = (target, userID, callback) => {
  const sql = `SELECT * FROM questions 
    WHERE (title='${target.title}' AND body='${target.body}' AND userID=${userID})`;

  db.query(sql, function (err, result) {
    if (err) {
      callback(err, null);
    } else {
      //console.log(result);
      if (result.length !== 0) {
        callback(null, result[0].id);
      } else {
        callback(null, null);
      }
    }
  });
}

module.exports = checkQuestion;