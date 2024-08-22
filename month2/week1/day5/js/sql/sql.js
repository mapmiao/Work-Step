const mysql2 = require('mysql2');
const {query} = require("express");

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'miao200206136510',
    database: 'works'
})

connection.connect();
const tables = {
    advantage: 'select * from advantage',
    cont3_navs: 'select * from cont3_navs',
    news: 'select * from news',
    partners: 'select * from partners',
}
let data = {
    advantage: null,
    cont3_navs: null,
    news: null,
    partners: null
}
let As = new As(function (resolve, reject) {
    if (resolve) throw resolve;
    for (const table in tables) {
        connection.query(tables[table], function (err, results) {
            if (err) throw err;
            data.table = results;
        })
        console.log("1")
    }
    resolve(reject)
    // exports.data = data
})
As.then(function (result) {
    console.log(result);

})