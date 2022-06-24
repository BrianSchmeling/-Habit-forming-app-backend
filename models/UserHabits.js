const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const userHabitsSchema = new Schema({
  name: String,
  description: String,
  difficultyLevel: Number,
});

const UserHabitsSchema = mongoose.model("userHabitsSchema", userHabitsSchema);

module.exports = UserHabitsSchema;
