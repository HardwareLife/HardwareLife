var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idFuncionario, nome, senha, email, fkDatacenter as DatacenterID, idEmpresa, nomeEmpresa, tipoNivel FROM funcionario
            JOIN datacenter ON fkDatacenter = idDatacenter
                JOIN empresa ON idEmpresa = fkEmpresa
                    WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, sobrenome, email, senha, tipoNivel, idSuperior, idDataCenter, cpf) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, cpf);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO funcionario (nome, sobrenome, cpf, email, senha, tipoNivel, fkSuperior, fkDatacenter) VALUES ('${nome}', '${sobrenome}','${cpf}', '${email}', '${senha}', '${tipoNivel}',${idSuperior}, ${idDataCenter});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPorDatacenter(idDatacenter) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorDatacenter()");
    var instrucao = `
        SELECT idFuncionario, nome, email, tipoNivel FROM funcionario
            JOIN datacenter ON fkDatacenter = idDatacenter
                    WHERE fkDatacenter = ${idDatacenter};
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

const deletarFuncionario = (idFuncionario) => {

    var instrucao = `DELETE FROM funcionario WHERE idFuncionario = ${idFuncionario}`

    return database.executar(instrucao)

}

module.exports = {
    autenticar,
    listarPorDatacenter,
    cadastrar,
    deletarFuncionario
};