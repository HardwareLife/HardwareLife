var express = require("express");
var router = express.Router();

var datacenterController = require("../controllers/datacenterController.js");

router.post("/pegarInformacoes", function (req, res) {
    datacenterController.pegarInformacoes(req, res);
})