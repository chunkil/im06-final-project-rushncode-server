/*
    POST /api/question/good
*/
const Promise = require("bluebird");
const db = require('../../../db/index');
const verifyToken = Promise.promisify(require("../../utillity/verifyToken"));
const updateGood = Promise.promisify(require("../../../model/updateGood"));
const updateGoodUser = Promise.promisify(require("../../../model/updateGoodUser"));

const handleUpdateGood = (req, res) => {
  const token = req.headers['x-access-token'] || req.query.token;
  const quesID = req.url.split('/')[2];
  verifyToken(token).then((email) => {
    updateGoodUser(quesID, email).then(() => {
      updateGood(quesID).then((result) => {
        res.send({
          message: result
        })
      })
    })
  })
}

module.exports = handleUpdateGood;