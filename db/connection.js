const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/habit-forming-app");

mongoose.Promise = Promise;

module.exports = mongoose;
