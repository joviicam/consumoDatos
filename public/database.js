const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE user (id INT, name TEXT)");
  db.run("INSERT INTO user (id, name) VALUES (1, 'John Doe')");
  db.run("INSERT INTO user (id, name) VALUES (2, 'Jane Smith')");
});

module.exports = db;