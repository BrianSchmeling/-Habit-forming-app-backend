const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pokemon_db");

mongoose.Promise = Promise;

module.exports = mongoose;
