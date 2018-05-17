/*
    GET /api/question/getlist
*/
const Promise = require("bluebird");
const db = require('../../../db/index');
const questionsList = Promise.promisify(require("../../../model/getQuestionsList"));
const tagsOfQuestion = Promise.promisify(require("../../../model/getTagsOfQuestion"));

const getList = (req, res) => {
  const page = req.url.split('/')[2];
  var data = null;
  questionsList(page).then((questions) => {
    for (var i = 0; i < questions.length; i++) {
      if (questions[i].tags === null) {
        questions[i].tags = [];
      } else {
        questions[i].tags = questions[i].tags.split(',');
      }
    }
    console.log(questions);
    res.send({
      message: 'good',
      data: questions
    });
  })

  // if (err) {
  //   res.send({
  //     message: err
  //   })
  // } else {
  //   res.send({
  //     message: 'good',
  //     data: result
  //   })
  // }


}

module.exports = getList;