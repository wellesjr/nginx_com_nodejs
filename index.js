const express = require('express');
const app = express();
const port = 3000;
// const config = {
//     host: 'db',
//     user: 'root',
//     password: 'root',
//     database: 'nodedb'
// };

// const mysql = require('mysql')
// const connection = mysql.createConnection(config)

// const sql = `INSERT INTO people(name) values('Welles Jr')`
// connection.query(sql)
// connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Bem-vindo ao Node.js!</h1>');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});