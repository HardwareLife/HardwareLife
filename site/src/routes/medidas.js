var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idRack", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idRack", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/media-mensal/:idRack", (req, res) => {
    medidaController.buscarMediaMensal(req, res)
})

router.get("/media-semanal/:idRack", (req, res) => {
    medidaController.buscarMediaSemanal(req, res)
})

router.get("/salas/:idDatacenter", (req, res) => {
    medidaController.buscarTemperaturaEUmidadeSala(req,res)
})
module.exports = router;