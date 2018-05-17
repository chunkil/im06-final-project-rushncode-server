const db = require('../db');


const updateQuestion = (target, callback) => {
  const {
    title,
    body,
    questionID
  } = target;
  const sql = `UPDATE questions SET title = '${title}', body = '${body}', updated_at = now() WHERE questions.id = ${questionID}`;

  db.query(sql, function (err, result) {
    if (err) {
      callback(err, false);
    } else {
      console.log(result);
      callback(null, true);
    }
  });
}

module.exports = updateQuestion;