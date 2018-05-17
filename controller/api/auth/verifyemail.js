/*
POST /api/auth/verifyemail
{
  email,
  password
}
*/

const bcrypt = require('bcrypt-nodejs');
const Promise = require("bluebird");
const getNotVerifiedEmails = Promise.promisify(require("../../../model/getNotVerifiedEmails"));
const updateUserVerified = Promise.promisify(require("../../../model/updateUserVerified"));

const verifyEmail = (req, res) => {
  const index = req.url.slice(13).indexOf('/');
  const hash = req.url.slice(13).slice(index + 1);
  const id = req.url.split('/')[2];
  getNotVerifiedEmails(id).then(emails => {
    console.log(emails);
    bcrypt.compare(emails[0].email, hash, function (err, result) {
      if (result === true) {
        updateUserVerified(emails[0].email).then(() => {
          res.redirect('http://127.0.0.1:3000/auth');
        })
      } else {
        res.send('melong');
      }
    });


  })
}



module.exports = verifyEmail;