/*
POST /api/question/modifyquestion
{
  body,
  questionID
}
*/

const Promise = require("bluebird");

const updateQuestion = Promise.promisify(require("../../../model/updateQuestion"));

const modifyQuestion = (req, res) => {
  let target = {};
  target.questionID = req.url.split('/')[2];
  target.title = req.body.title;
  target.body = req.body.body;


  updateQuestion(target).then(() => {
    res.send({
      message: 'modify complete!'
    });
  })
}

module.exports = modifyQuestion;