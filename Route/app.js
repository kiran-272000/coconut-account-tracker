const express = require("express");

const app = express();

const db = require("./db");
app.use(express.json());
const Router = express.Router();

app.get("/api", (req, res) => {
  res.status(200).send("API works");
});

module.exports = app;
