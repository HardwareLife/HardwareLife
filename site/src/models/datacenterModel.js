var database = require("../database/config");

function pegarInformacoes(idFuncionario) {
    var query = `idDatacenter, logradouro, numero, bairro, cidade, uf, telefoneEmpresa from datacenter
     join funcionario on fkDatacenter = idDatacenter
     join empresa on idEmpresa = fkEmpresa
      where idFuncionario = '${idFuncionario}'`;
  
    return database.executar(query);
  }

  module.exports = {pegarInformacoes};