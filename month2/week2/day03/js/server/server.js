const express = require('express');
const sql = require('../sql/sql');
const app = express();

app.get('/index', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(sql.user);
})
app.listen(8000, (req, res) => {
    console.log('http://localhost:8000/index');
})