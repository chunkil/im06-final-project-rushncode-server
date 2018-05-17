/*
POST /api/question/displayq
{
  body,
  questionID
}
*/

const Promise = require("bluebird");

const getQuestion = Promise.promisify(require("../../../model/getQuestion"));
const getAnswers = Promise.promisify(require("../../../model/getAnswers"));
const getChAnswers = Promise.promisify(require("../../../model/getChAnswers"));
const tagsOfQuestion = Promise.promisify(require("../../../model/gettagsOfQuestion"));
const updateView = Promise.promisify(require("../../../model/updateView"));


const displayQ = (req, res) => {
  var data = {};
  const quesID = req.url.split('/')[2];
  getQuestion(quesID).then((ques) => {
    //console.log(ques);
    data = ques;
    getAnswers(quesID).then((answ) => {
      //console.log(answ);
      data.answers = {};
      if (answ) {
        answ.map((item, index) => {
          data.answers[item.aID] = item;
          data.answers[item.aID].chAnswers = [];
        })
      }
      //console.log(data);
      getChAnswers(quesID).then((chAnsw) => {
        //console.log(chAnsw);
        if (chAnsw) {
          chAnsw.map((item, index) => {
            data.answers[item.aID].chAnswers.push(item);
          })
        }
        tagsOfQuestion(quesID).then((tags) => {
          console.log('tags@#@#@#@#', tags);
          data.tags = [];
          if (tags) {
            tags.map(item => {
              data.tags.push(item.tag)
            })
          }
          updateView(quesID).then(() => {
            res.send({
              message: 'good',
              data
            });
          })
        })
      })
    })
  })
}

module.exports = displayQ;