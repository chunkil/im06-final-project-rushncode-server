/*
    POST /api/question/answer
    {
        body,
        questionID
    }
*/

const Promise = require("bluebird");

const checkUser = Promise.promisify(require("../../../model/checkUser"));
const saveAnswer = Promise.promisify(require("../../../model/saveAnswer"));
const verifyToken = Promise.promisify(require("../../utillity/verifyToken"));

const leaveAnswer = (req, res) => {
  const token = req.headers['x-access-token'] || req.query.token;
  const data = req.body;
  verifyToken(token).then((email) => {
    checkUser(email).then(result => {
      const userID = result.id;
      saveAnswer(data, userID).then(() => {
        res.send('ASFDASFERERER');
      })
    });
  });
}

module.exports = leaveAnswer;