const express = require("express");

const app = express();
const coconutRoutes = require("./coconutRoutes");
const db = require("./db");
app.use(express.json());
const Router = express.Router();

app.get("/api", (req, res) => {
  res.status(200).send("API works");
});

app.use("/api/coconut", coconutRoutes);

module.exports = app;
