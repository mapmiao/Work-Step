const express = require('express');
let sql = require('../sql/sql');
let app = express();


app.get('/server', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(sql.table)
    console.log(sql.table)
})

app.listen(8000, function () {
    console.log('http://localhost:8000/server');

});