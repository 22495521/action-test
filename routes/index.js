var express = require("express");
var router = express.Router();
require("dotenv").config();

const { ENV_VARIABLES, PORT } = process.env;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express11", ENV_VARIABLES });
});

module.exports = router;
