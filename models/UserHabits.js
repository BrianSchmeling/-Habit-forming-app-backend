const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const userHabitsSchema = new Schema({
  username: String,
  habitName: String,
  goal: String,
  daysOfWeek: {
    monday: Boolean,
    tuesday: Boolean,
    wednesday: Boolean,
    thursday: Boolean,
    friday: Boolean,
    saturday: Boolean,
    sunday: Boolean,
  },
  startingDate: Date,
  targetDate: Date,
});

const UserHabitsSchema = mongoose.model("userHabitsSchema", userHabitsSchema);

module.exports = UserHabitsSchema;
