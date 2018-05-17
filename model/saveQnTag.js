const db = require("../db");

const saveQnTag = (target, questionID, callback) => {
  console.log('asdfasdf@#@#', target);
  if (target) {
    let string = '';
    target.map((item, index) => {
      if (index !== 0) {
        string += ', ';
      }
      string += `(${item.id}, ${questionID})`
    });
    console.log('@#@#@#@#', string);
    const sql = `INSERT INTO q_tag(tagID, questionID) 
        VALUES ${string}`;
    db.query(sql, function (err, result) {
      if (err) {
        callback(err, null);
      } else {
        console.log(result);
        callback(null, result);
      }
    });
  }
  callback(null, null);

};

module.exports = saveQnTag;