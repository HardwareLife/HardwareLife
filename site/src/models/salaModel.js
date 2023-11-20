var database = require("../database/config");

function buscarSalasPorDataCenter(DatacenterID) {

  instrucaoSql = `select * from sala where fkDatacenter = ${DatacenterID}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {
  
  instrucaoSql = `insert into (descricao, fk_empresa) aquario values (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarSalasPorDataCenter,
  cadastrar
}
