var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idRack = req.params.idRack;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idRack, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idRack = req.params.idRack;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idRack).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMediaMensal(req, res){

    var idRack = req.params.idRack

    medidaModel.buscarMediaMensal(idRack).then(resultado => {
        if(resultado.length > 0){
            res.status(200).json(resultado)
        }else{
            res.status(204).send("Nenhum resultado encontrado")
        }
    }).catch(err => {
        console.log(err)
        console.log("Houve um erro ao buscar as médias mensais")
        res.status(500).json(err.sqlMessage);
    })

}

function buscarMediaSemanal(req, res){

    var idRack = req.params.idRack

    medidaModel.buscarMediaSemanal(idRack).then(resultado => {
        if(resultado.length > 0){
            res.status(200).json(resultado)
        }else{
            res.status(204).send("Nenhum resultado encontrado")
        }
    }).catch(err => {
        console.log(err)
        console.log("Houve um erro ao buscar as médias mensais")
        res.status(500).json(err.sqlMessage);
    })

}



module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarMediaMensal,
    buscarMediaSemanal
}