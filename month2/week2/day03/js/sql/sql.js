const sql = require('mysql2');
const express = require('express');

const conn = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'miao200206136510',
    database: 'day8_user'
})

conn.query('select * from user',(err, result) => {
    if (err) throw err;
    exports.user = result;
})