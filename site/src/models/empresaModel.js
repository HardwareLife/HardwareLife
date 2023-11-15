var database = require("../database/config");

function buscarPorId(idEmpresa) {
  var query = `select * from empresa where idEmpresa = '${idEmpresa}'`;

  return database.executar(query);
}

function listar() {
  var query = `select * from e mpresa`;

  return database.executar(query);
}

function buscarPorCnpj(cnpj) {
  var query = `select * from empresa where cnpj = '${cnpj}'`;

  return database.executar(query);
}

function cadastrar(cnpj, nome, email, telefone) {
  var query = `insert into empresa (cnpj, nomeEmpresa, emailEmpresa, telefoneEmpresa) values ('${cnpj}', '${nome}', '${email}', '${telefone}')`;

  return database.executar(query).then(() => {

    //Instrução para inserir o CEO na tabela funcionario
    var queryFunc = `INSERT INTO funcionario (email, senha, tipoNivel) VALUES ('${email}', '#HL${cnpj}', 'CEO')`;

    console.log("Executando a instrução SQL para queryFunc: \n" + queryFunc);
    // Executar a instrução SQL para inserir o CEO
    return database.executar(queryFunc)
  });
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };
