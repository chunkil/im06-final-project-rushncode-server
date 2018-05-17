const db = require('../db');



const saveAnswer = (target, userID, callback) => {
  const {
    body,
    questionID
  } = target;
  const sql = `INSERT INTO answers(body, questionID, userID) 
              VALUES('${body}', ${questionID}, ${userID})`;

  db.query(sql, function (err, result) {
    if (err) {
      callback(err, null);
    } else {
      console.log("answer is saved in DB");
      console.log(result);
      callback(null, 'save answer complete!')
    }
  });
}

module.exports = saveAnswer;