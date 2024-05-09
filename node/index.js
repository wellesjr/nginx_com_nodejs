const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const connection = mysql.createConnection(config);

connection.connect(err => {
  if (err) {
    return console.error('error connecting: ' + err.stack);
  }
  console.log('connected as id ' + connection.threadId);

  const name = "Visitante " + Date.now();
  const sql = `INSERT INTO people (name) VALUES (?)`;
  connection.query(sql, [name], (err, result) => {
    if (err) throw err;
    console.log("1 visitante inserido!");
  });
});

app.get('/', (req, res) => {
  connection.query('SELECT name FROM people', (err, results) => {
    if (err) throw err;
    res.send('<h1>Full Cycle Rocks!</h1>' + results.map(r => `<p>${r.name}</p>`).join(''));
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});