/*
    POST /api/question/post
    {
        title,
        body,
        reward,
        tags //array(3)
    }
*/

const Promise = require("bluebird");

const saveQuestion = Promise.promisify(require("../../../model/saveQuestion"));
const checkUser = Promise.promisify(require("../../../model/checkUser"));
const checkTag = Promise.promisify(require("../../../model/checkTag"));
const checkQuestion = Promise.promisify(require("../../../model/checkQuestion"));
const saveQnTag = Promise.promisify(require("../../../model/saveQnTag"));
const verifyToken = Promise.promisify(require("../../utillity/verifyToken"));




const postQuestion = (req, res) => {
  const {
    title,
    body,
    reward,
    tags
  } = req.body;
  console.log(req.query);
  const token = req.headers['x-access-token'] || req.query.token;

  // console.log(req.body);
  const data = {
    title,
    body,
    reward
  };

  verifyToken(token).then((email) => {
    checkUser(email).then(result => {
      //console.log('@#@#@#@#@#@#####', result);
      const userID = result.id;
      saveQuestion(data, userID).then(() => {
        checkQuestion(data, userID).then(resultID => {
          console.log("result!@!@!@", resultID);
          const qID = resultID;
          checkTag(tags).then(t => {
            saveQnTag(t, qID).then(a => {
              console.log(a);
              res.send("asdfasdfasdfasdf");
            });
          });
        });
      });
    });
  });
  // checkUser(email, (err, result) => {
  //     if (err) {
  //         console.log(err);
  //     } else {
  //         if (result) {

  //             saveQuestion(data, (err, result) => {
  //                 if (err) {
  //                     res.send({
  //                         message: err
  //                     });
  //                 } else {
  //                     checkQuestion(data, (err, result) => {
  //                         if (err) {
  //                             res.send(err);
  //                         } else {
  //                             if (result) {
  //                                 checkTag(tags, (err, result) => {
  //                                     if (err) {
  //                                         console.log(err);
  //                                     } else {

  //                                     }
  //                                 })
  //                             } else {
  //                                 res.send()
  //                             }
  //                         }
  //                     })
  //                     res.send({
  //                         message: result
  //                     })
  //                 }
  //             })
  //         } else {
  //             res.send({
  //                 message: 'email is not exist'
  //             });
  //         }
  //     }
  // })
};

module.exports = postQuestion;