const express = require('express');
const rooms = express.Router();
const conn = require('../db/conn');

rooms.route('/rooms').get((req, res) =>  {
    let q = `
        SELECT c.*, tc.statut
        FROM chambres AS c 
            INNER JOIN temp_ch AS tc 
            WHERE c.id_ch = tc.id_ch`;
    conn.execute(q, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            let results = [];
            for (row of rows)
                results.push(row);
            res.json(results);
        }
    })
});

rooms.route('/rooms/update/:id').put((req, res) => {
    let params = req.params;
    let body = req.body;
    let q = `
        UPDATE chambres AS c INNER JOIN temp_ch AS tc ON (c.id_ch = tc.id_ch)
        SET c.type_ch = ?, c.prix_ch = ?, tc.statut = ?
        WHERE c.id_ch = ? 
    `
    conn.execute(
        q,
        [body.type_ch,  body.prix_ch, body.statut_ch, params.id],
        (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                res.json({message: rows.affectedRows + 'row affected'});
            }
        }
    )
})


module.exports = rooms;