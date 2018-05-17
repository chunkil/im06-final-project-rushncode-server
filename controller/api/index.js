const router = require('express').Router();
const auth = require('./auth');
const question = require('./question');

router.use('/auth', auth);
router.use('/question', question);

module.exports = router;