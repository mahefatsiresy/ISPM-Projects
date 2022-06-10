const rooms = require("./rooms");
const clients = require("./clients");
const rese = require("./reservations");
const histo = require('./historiques');

exports.histo = histo;
exports.rese = rese;
exports.rooms = rooms;
exports.clients = clients;