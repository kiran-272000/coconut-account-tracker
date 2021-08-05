const express = require("express");

const coconutController = require("../controller/cocnutController.js");

const Router = express.Router();

Router.route("/addcoconut").post(coconutController.addCoconut);
//Router.route("/:year").get(coconutController.year);
Router.route("/yearlydata").get(coconutController.yearlyData);
module.exports = Router;
