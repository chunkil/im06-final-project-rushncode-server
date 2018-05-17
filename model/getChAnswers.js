const db = require('../db');



const getChAnswers = (target, callback) => {
  const sql = `SELECT 
                childanswers.id AS cID, 
                childanswers.body AS cBody, 
                childanswers.updated_at AS cTime,
                childanswers.answerID AS aID
              FROM questions 
              INNER JOIN answers 
              ON questions.id=answers.questionID
              INNER JOIN childanswers 
              ON answers.id=childanswers.answerID
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

module.exports = getChAnswers;