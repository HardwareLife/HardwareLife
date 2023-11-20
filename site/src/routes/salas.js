var express = require("express");
var router = express.Router();

var salaController = require("../controllers/salaController");

router.get("/:datacenterID", function (req, res) {
  salaController.buscarSalasPorDataCenter(req, res);
});

router.post("/cadastrar", function (req, res) {
  salaController.cadastrar(req, res);
})

module.exports = router;