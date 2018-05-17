const jwt = require('jsonwebtoken');


const verifyToken = (token, callback) => {
  // read the token from header or url 

  console.log(token);
  // token does not exist
  if (token) {
    jwt.verify(token, 'rushncode', (err, decoded) => {
      if (err) callback(err, null);
      else {
        //console.log('decoded@@@#@#', decoded);
        callback(null, decoded.email);
      }
    });
  } else {
    callback('invalid token', null);
  }
}

module.exports = verifyToken;