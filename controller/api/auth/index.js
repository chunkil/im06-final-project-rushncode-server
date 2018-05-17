const router = require('express').Router();
const verify = require('./verify');
const signin = require('./signin');
const signup = require('./signup');
const sendMail = require('./sendMail');
const verifyEmail = require('./verifyemail');

const github = require('./github');
const test = require('./test');


router.get('/verify', verify);
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/verifyemail/*', verifyEmail);

router.post('/github', github);

router.post('/test', test);

module.exports = router