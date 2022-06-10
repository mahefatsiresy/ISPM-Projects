const sqlite3 = require("sqlite3");

const createConnection = () => {
  const db = new sqlite3.Database("./kali-rapida.db");
  return db;
};

module.exports = createConnection;
