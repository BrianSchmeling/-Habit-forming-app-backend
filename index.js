const express = require("express");
const parser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(cors());

const routes = require("./routes/index");
app.use(routes);

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
