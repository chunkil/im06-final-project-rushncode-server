const bcrypt = require('bcrypt-nodejs');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rushncode@gmail.com',
    pass: 'a0123456#'
  }
});

const sendMail = (email, id) => {
  bcrypt.hash(email, null, null, function (err, hash) {
    if (err) {
      console.log(err);
    } else {
      var mailOptions = {
        from: 'rushncode@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: `http://localhost:3001/api/auth/verifyemail/${id}/${hash}`
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }
  })
}

module.exports = sendMail;