const mysql = require("mysql");



const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "asdqwe123",
  database: "rushNcode"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// connection.query("SET FOREIGN_KEY_CHECKS = 0");
// connection.query("DROP TABLE IF EXISTS `childAnswers`");
// connection.query("DROP TABLE IF EXISTS `answers`");
// connection.query("DROP TABLE IF EXISTS `q_user`");
// connection.query("DROP TABLE IF EXISTS `questions`");
// connection.query("DROP TABLE IF EXISTS `childReplies`");
// connection.query("DROP TABLE IF EXISTS `replies`");
// connection.query("DROP TABLE IF EXISTS `posts`");
// connection.query("DROP TABLE IF EXISTS `users`");
// connection.query("DROP TABLE IF EXISTS `q_tag`");
// connection.query("DROP TABLE IF EXISTS `tags`");
// connection.query("SET FOREIGN_KEY_CHECKS = 1");

module.exports = connection;