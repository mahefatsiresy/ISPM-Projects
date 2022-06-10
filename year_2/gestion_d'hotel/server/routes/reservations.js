const express = require('express');
const rese = express.Router();
const conn = require('../db/conn');

rese.route('/reservations').get((req, res) => {
    let q = `SELECT * FROM reservations`;
    conn.execute(q, (err, rows) => {
        if (err) {
            console.log(err)
        } else {
            let result = [];
            for (row of rows)
                result.push(row)
            res.json(result);
        }
    })
});

rese.route('/reservations/new').post((req, res) => {
    let reqBody = req.body;
    let q = `
        INSERT INTO reservations(id_cli, id_ch, date_deb_res, date_fin_res)
        VALUE (?, ?, ?, ?)
    `
    conn.execute(
        q,
        [parseInt(reqBody.id_cli), parseInt(reqBody.id_ch), reqBody.date_deb_res, reqBody.date_fin_res],
        (err, rows) => {
            if (err) {
                console.log(err)
            } else {
                conn.execute(
                    `UPDATE temp_ch SET statut = ? WHERE id_ch = ?`,
                    ['RESERVEE', parseInt(reqBody.id_ch)],
                    (err, rows) => {
                        if (err)
                            console.log(err)
                        else
                            conn.execute(
                                `
                                    INSERT INTO sejours(id_cli, id_ch, date_arr, date_dep)
                                    VALUE (?, ?, ?, ?)
                                `,
                                [parseInt(reqBody.id_cli), parseInt(reqBody.id_ch), reqBody.date_deb_res, reqBody.date_fin_res]
                            )
                    }
                )
            }
        })
})

rese.route("/reservations/delete/:id").delete((req, res) => {
    let reqParams = req.params;
    let q = `DELETE FROM reservations WHERE id_res = ?`;
    conn.execute(
        q,
        [reqParams.id],
        (err, rows) => {
            if (err)
                console.log(err)
            else
                res.json({ message: `Row with id:${reqParams.id} deleted` })
        }
    )
});

rese.route("/reservations/update/:id").put((req, res) => {
    let reqParams = req.params;
    let reqBody = req.body;
    let q = `
        UPDATE reservations
        SET date_deb_res = ?, date_fin_res = ?
        WHERE id_res = ?
    `;
    conn.execute(
        q,
        [reqBody.date_deb_res, reqBody.date_fin_res, reqParams.id],
        (err, rows) => {
            if (err)
                console.log(err)
            else
                res.json({message: `Reservation num: ${reqParams} updated`});
        }
    )
});

module.exports = rese;