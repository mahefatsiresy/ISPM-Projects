const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// express server
const app = express();
// middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require("./routes/routes"));

app.listen(5000, () => console.log("Server listening on port 5000"));
