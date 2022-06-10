const createConnection = require("../db");

const router = require("express").Router();

// get repas
router.route("/repas").get((req, res) => {
  const db = createConnection();
  db.all(`SELECT * FROM REPAS`, (err, rows) => {
    if (err) console.log(err);
    else res.json(rows);
  });
  db.close();
});

// post client
router.route("/post-client").post((req, res) => {
  let nomCLient = req.body.NOM_CLIENT;
  const db = createConnection();
  db.run(`INSERT INTO CLIENTS(NOM_CLIENT) VALUES ${nomCLient}`, (err) => {
    if (err) console.log(err);
    else res.json({ message: "Insértion effectuée" });
  });
});

// post commande
router.route("/post-commande").post((req, res) => {
  let idRepas = req.body.ID_REPAS;
  let idCli = req.body.ID_CLI;
  let qtt = req.body.QTT;
  db.run(
    `INSERT INTO COMMANDES(ID_REPAS, ID_CLIENT, QTT) VALUES ($repas, $cli, $qtt)`,
    { $repas: idRepas, $cli: idCli, $qtt: qtt },
    (err) => {
      if (err) console.log(err);
      else res.json({ message: "Insértion effectuée" });
    }
  );
});

module.exports = router;
