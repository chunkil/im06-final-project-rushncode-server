/*
POST /api/auth/signin
{
  email,
  password
}
*/
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const checkUser = require('../../../model/checkUser');

const signin = (req, res) => {
  const {
    email,
    password
  } = req.body;

  const cryptPassword = (target, callback) => {
    bcrypt.compare(password, target, function (err, truth) {
      if (err) {
        console.log(err);
        callback({
          message: err
        });
      } else {
        if (truth) {
          // console.log('login success');
          jwt.sign({
            email: email
          }, 'rushncode', {
            expiresIn: '7d',
            issuer: 'rushncode',
            subject: 'userInfo'
          }, (err, token) => {
            if (err) {
              console.log(err);
              callback(err, null);
            } else {
              callback(null, {
                message: 'login success',
                token
              });
            }
          })
        } else {
          console.log('login fail');
          callback({
            message: 'password is not corret'
          });
        }
      }
    });
  }

  checkUser(email, (err, result) => {
    if (err) {
      res.send({
        message: err
      });
    } else {
      console.log(result);
      if (result) {
        if (result.verified === 1) {
          cryptPassword(result.password, (resultVerify) => {
            res.send(resultVerify);
          })
        } else {
          res.send({
            message: 'check your email & verify'
          });
        }
      } else {
        console.log('not exist');
        res.send({
          message: 'email is not exist'
        });
      }
    }
  })


}



module.exports = signin;