const db = require('../db');



const getAnswers = (target, callback) => {
  const sql = `SELECT 
                answers.id AS aID, 
                answers.body AS aBody, 
                answers.updated_at AS aTime, 
                answers.good AS aGood
              FROM questions 
              INNER JOIN answers 
              ON questions.id=answers.questionID
              WHERE questions.id=${target}`;

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

module.exports = getAnswers;