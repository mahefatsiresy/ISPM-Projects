const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const {rooms, clients, rese, histo} = require('./routes/routes');

app.use(cors()); // autoriser les requettes locales
app.use(express.json()); //
app.use(bodyParser.urlencoded({extended: false})); //pour la requete post
require('./db/conn'); //importer la connexion a la base de donnée

//Test
// app.get('/', (req, res) => {
//     res.send('HELLO')
// })

//Router
app.use(rooms);
app.use(clients);
app.use(rese);
app.use(histo);

const PORT = 5000;
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));