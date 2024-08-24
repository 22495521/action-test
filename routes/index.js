var express = require("express");
var router = express.Router();
require("dotenv").config();

const { ENV_VARIABLE, PORT } = process.env;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "我是8778", ENV_VARIABLE });
});

module.exports = router;
