const db = require('../db');


const updateGoodUser = (questionID, userID, callback) => {
  const sql = `INSERT INTO q_user (questionID, userID)
                  SELECT * FROM (SELECT ${questionID}, (SELECT id FROM users WHERE email='${userID}')) AS tmp
                  WHERE NOT EXISTS 
                    (SELECT * FROM q_user WHERE questionID=${questionID} AND userID=(SELECT id FROM users WHERE email='${userID}'))`;

  db.query(sql, function (err, result) {
    if (err) {
      callback(err, false);
    } else {
      callback(null, true);
    }
  });
}

module.exports = updateGoodUser;