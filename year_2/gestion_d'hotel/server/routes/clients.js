const express = require('express');
const clients = express.Router();
const conn = require('../db/conn');


clients.route('/clients').get((req, res) => {
    let q = `SELECT * FROM clients`;
    conn.execute(q, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            let results = [];
            for (row of rows) {
                results.push(row);
            }
            res.json(results);
        }
    })
});

clients.route('/clients/new').post((req, res) => {
    let body = req.body;
    let q = `
        INSERT INTO clients(nom_cli, prenom_cli, telephone_cli) VALUE (?, ?, ?)
    `
    conn.execute(q, [body.nom, body.prenom, body.tel], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ message: 'OK' })
        }
    })
});

clients.route('/clients/delete/:id').delete((req, res) => {
    let params = req.params;
    let q = `
        DELETE FROM clients WHERE id_cli = ?
    `
    conn.execute(q, [parseInt(params.id)], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ message: params.id + 'DELETED' })
        }
    });
});

clients.route('/clients/update/:id').put((req, res) => {
    let body = req.body;
    let params = req.params;
    let q = `
        UPDATE clients
        SET nom_cli = ?, prenom_cli = ?, telephone_cli = ?
        WHERE id_cli = ?
    `
    conn.execute(
        q, 
        [body.nom_cli, body.prenom_cli, body.tel_cli, parseInt(params.id)],
        (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                res.json({message: rows.affectedRows + ' affected'})
            }
        }
    )
})

module.exports = clients;