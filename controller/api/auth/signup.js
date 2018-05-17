/*
    POST /api/auth/signup
    {
        email,
        username,
        password
    }
*/
const bcrypt = require('bcrypt-nodejs');
const saveUser = require('../../../model/saveUser');
const checkUser = require('../../../model/checkUser');
const sendMail = require('./sendMail');

const signup = (req, res) => {
  const {
    email,
    username,
    password
  } = req.body;
  console.log('@@@@@@@', req.body);

  checkUser(email, (err, result) => {
    if (err) {
      console.log(err);
      res.send({
        message: err
      })
    } else {
      if (result) {
        console.log('email 중복');
        res.send({
          message: 'email is exist'
        })
      } else {
        bcrypt.hash(password, null, null, function (err, hash) {
          if (err) {
            console.log(err);
            res.send({
              message: err
            });
          } else {
            console.log(hash);
            const user = {
              email,
              username,
              password: hash
            }
            saveUser(user, (err, result) => {
              if (err) {
                res.send({
                  message: err,
                  success: result
                });
              } else {
                checkUser(email, (err, result) => {
                  if (err) {
                    console.log(err)
                  } else {
                    sendMail(email, result.id);
                    res.send({
                      message: 'complete signup',
                      success: result
                    })
                  }
                })
              }
            })
          }
        });
      }
    }
  })
}

module.exports = signup;