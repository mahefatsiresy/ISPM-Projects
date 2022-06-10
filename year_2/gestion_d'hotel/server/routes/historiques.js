const express = require('express');
const histo = express.Router();
const conn = require('../db/conn');


histo.route('/historiques').get((req, res) => {
    let q = `SELECT * FROM sejours`;
    conn.execute(q, (err, rows) => {
        if (err) {
            console.log(err)
        } else {
            let result = [];
            for (row of rows) 
                result.push(row);
            res.json(result);
        }
    });
});

module.exports = histo;