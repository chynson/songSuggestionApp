const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'carl',
  password: 'surface118',
  database: 'songsuggestapp'
});
connection.connect();

app.post('./users', (req, res) => {
  const { name } = req.body;
  const user = { name };
  const sql = 'INSERT INTO users SET ?';
  connection.query(sql, user, (error, results, fields) => {
    if (error) throw error;
    res.send('User added to database');
  });
});

app.post('./create-post', (req, res) => {
  const { name } = req.body;
  const post = { name };
  const sql = 'INSERT INTO posts SET ?';
  connection.query(sql, post, (error, results, fields) => {
    if (error) throw error;
    res.send('New post added to database');
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
