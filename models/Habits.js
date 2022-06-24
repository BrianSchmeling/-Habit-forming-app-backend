const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const habitsSchema = new Schema({
  name: String,
  description: String,
  difficultyLevel: Number,
});

const HabitsSchema = mongoose.model("HabitsSchema", habitsSchema);

module.exports = HabitsSchema;
