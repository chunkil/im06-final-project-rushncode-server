/*
    POST /api/question/chanswer
    {
        body,
        questionID
    }
*/

const Promise = require("bluebird");

const checkUser = Promise.promisify(require("../../../model/checkUser"));
const saveChAnswer = Promise.promisify(require("../../../model/saveChAnswer"));
const verifyToken = Promise.promisify(require("../../utillity/verifyToken"));

const leaveChAnswer = (req, res) => {
  const token = req.headers['x-access-token'] || req.query.token;
  const data = req.body;
  verifyToken(token).then((email) => {
    checkUser(email).then(result => {
      const userID = result.id;
      saveChAnswer(data, userID).then(() => {
        res.send('ASFDASFERERER');
      })
    });
  });
}

module.exports = leaveChAnswer;