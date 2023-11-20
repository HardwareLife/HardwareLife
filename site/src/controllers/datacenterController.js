var datacenterModel = require("../models/datacenterModel");

function pegarInformacoes(req, res) {
    var idFuncionario = req.params.idFuncionario;

    datacenterModel.pegarInformacoes(idFuncionario)
    .then((resultadoData) => {
        if (resultadoData.length > 0) {
            res.json({
                idDataCenter: resultadoData[0].idDatacenter,
                logradouro: resultadoData[0].logradouro,
                numero: resultadoData[0].numero,
                bairro: resultadoData[0].bairro,
                cidade: resultadoData[0].cidade,
                uf: resultadoData[0].uf,
                telefoneEmpresa: resultadoData[0].telefoneEmpresa,
            });
        } else {
            res.status(204).json({ salas: [] });
        }
    });
}

module.exports = {
    pegarInformacoes
  };