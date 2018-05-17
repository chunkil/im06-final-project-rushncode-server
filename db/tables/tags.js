const db = require("../index");

const sql = `CREATE TABLE IF NOT EXISTS tags (
  id INTEGER AUTO_INCREMENT,
  tag VARCHAR(255), 
  PRIMARY KEY(id)
) DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("add tags table");
});

var query = `INSERT INTO tags(tag) SELECT *
              FROM (SELECT ('javascript')) AS tmp
              WHERE NOT EXISTS 
              (SELECT * FROM tags WHERE tags.tag = 'javascript')`;

db.query(query, function (err, result) {
  if (err) throw err;
});


var query = `INSERT INTO tags(tag) SELECT *
              FROM (SELECT ('react.js')) AS tmp
              WHERE NOT EXISTS 
              (SELECT * FROM tags WHERE tags.tag = 'react.js')`;

db.query(query, function (err, result) {
  if (err) throw err;
});

var query = `INSERT INTO tags(tag) SELECT *
              FROM (SELECT ('node.js')) AS tmp
              WHERE NOT EXISTS 
              (SELECT * FROM tags WHERE tags.tag = 'node.js')`;

db.query(query, function (err, result) {
  if (err) throw err;
});

var query = `INSERT INTO tags(tag) SELECT *
              FROM (SELECT ('vue.js')) AS tmp
              WHERE NOT EXISTS 
              (SELECT * FROM tags WHERE tags.tag = 'vue.js')`;

db.query(query, function (err, result) {
  if (err) throw err;
});

var query = `INSERT INTO tags(tag) SELECT *
              FROM (SELECT ('angular.js')) AS tmp
              WHERE NOT EXISTS 
              (SELECT * FROM tags WHERE tags.tag = 'angular.js')`;

db.query(query, function (err, result) {
  if (err) throw err;
});

var query = `INSERT INTO tags(tag) SELECT *
              FROM (SELECT ('swift')) AS tmp
              WHERE NOT EXISTS 
              (SELECT * FROM tags WHERE tags.tag = 'swift')`;

db.query(query, function (err, result) {
  if (err) throw err;
});

var query = `INSERT INTO tags(tag) SELECT *
              FROM (SELECT ('C')) AS tmp
              WHERE NOT EXISTS 
              (SELECT * FROM tags WHERE tags.tag = 'C')`;

db.query(query, function (err, result) {
  if (err) throw err;
});

var query = `INSERT INTO tags(tag) SELECT *
              FROM (SELECT ('java')) AS tmp
              WHERE NOT EXISTS 
              (SELECT * FROM tags WHERE tags.tag = 'java')`;

db.query(query, function (err, result) {
  if (err) throw err;
});

var query = `INSERT INTO tags(tag) SELECT *
              FROM (SELECT ('C#')) AS tmp
              WHERE NOT EXISTS 
              (SELECT * FROM tags WHERE tags.tag = 'C#')`;

db.query(query, function (err, result) {
  if (err) throw err;
});

var query = `INSERT INTO tags(tag) SELECT *
              FROM (SELECT ('C++')) AS tmp
              WHERE NOT EXISTS 
              (SELECT * FROM tags WHERE tags.tag = 'C++')`;

db.query(query, function (err, result) {
  if (err) throw err;
});

var query = `INSERT INTO tags(tag) SELECT *
              FROM (SELECT ('python')) AS tmp
              WHERE NOT EXISTS 
              (SELECT * FROM tags WHERE tags.tag = 'python')`;

db.query(query, function (err, result) {
  if (err) throw err;
});

var query = `INSERT INTO tags(tag) SELECT *
              FROM (SELECT ('Mysql')) AS tmp
              WHERE NOT EXISTS 
              (SELECT * FROM tags WHERE tags.tag = 'Mysql')`;

db.query(query, function (err, result) {
  if (err) throw err;
});