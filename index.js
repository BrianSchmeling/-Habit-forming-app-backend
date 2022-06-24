const express = require("express");
const parser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(cors());

const routes = require("./routes/index");
app.use(routes);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
