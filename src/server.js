const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require('dotenv').config();

const app = express();

mongoose.connect(process.env.URL_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3000);
