const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const requestHandle = require('./controller');

const users = require('./db/tables/users');
const questions = require('./db/tables/questions');
const answers = require('./db/tables/answers');
const childAnswers = require('./db/tables/childAnswers');
const tags = require('./db/tables/tags');
const q_tag = require('./db/tables/q_tag');
const q_user = require('./db/tables/q_user');
const posts = require('./db/tables/posts');
const replies = require('./db/tables/replies');
const childReplies = require('./db/tables/childReplies');


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '/client/public')));



requestHandle(app);

app.listen(3001);
console.log('listening, 3001');