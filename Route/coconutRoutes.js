const express = require("express");

const coconutController = require("../controller/cocnutController.js");

const Router = express.Router();

Router.route("/addcoconut").post(coconutController.addCoconut);
Router.route("/yearlydata").get(coconutController.yearlyData);
Router.route("/:year").get(coconutController.year);
module.exports = Router;
