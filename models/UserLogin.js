const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const userLoginSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const UserLoginSchema = mongoose.model("userLoginSchema", userLoginSchema);

module.exports = UserLoginSchema;