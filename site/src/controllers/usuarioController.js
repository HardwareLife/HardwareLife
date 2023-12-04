var usuarioModel = require("../models/usuarioModel");
var salaModel = require("../models/salaModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        salaModel.buscarSalasPorDataCenter(resultadoAutenticar[0].DatacenterID)
                            .then((resultadosala) => {
                                if (resultadosala.length > 0) {
                                    res.json({
                                        idFuncionario: resultadoAutenticar[0].idFuncionario,
                                        nome: resultadoAutenticar[0].nome,
                                        senha: resultadoAutenticar[0].senha,
                                        email: resultadoAutenticar[0].email,
                                        idEmpresa: resultadoAutenticar[0].idEmpresa,
                                        nomeEmpresa: resultadoAutenticar[0].nomeEmpresa,
                                        tipoNivel: resultadoAutenticar[0].tipoNivel,
                                        salas: resultadosala
                                    });
                                } else {
                                    res.status(204).json({ salas: [] });
                                }
                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var nivel = req.body.nivelServer;
    var idSuperior = req.body.fkSuperiorServer;
    var idDataCenter = req.body.fkDataCenterServer;
    var cpf = req.body.cpfServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    }else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }else if (senha == undefined) {
        res.status(400).send("Seu senha está undefined!");
    }else if (nivel == undefined) {
        res.status(400).send("Seu tipo Nivel está undefined!");
    }else if (idSuperior == undefined) {
        res.status(400).send("Seu ID Superior está undefined!");
    }else if (idDataCenter == undefined) {
        res.status(400).send("Seu ID DataCenter está undefined!");
    }else if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, sobrenome, email, senha, nivel, idSuperior, idDataCenter, cpf)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listarFuncionario(req, res) {
    idDatacenter = req.params.idDatacenter;

    usuarioModel.listarPorDatacenter(idDatacenter)
    .then(
        function (resultado) {
            if(resultado.length > 0) {
                res.status(200).json(resultado);
            }else{
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }
    )
    .catch(
        function (erro) {
            console.log(erro);
            console.log(
                "Houve um erro ao buscar os avisos: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function deletarFuncionario(req, res){

    var idFuncionario = req.params.idFuncionario

    usuarioModel.deletarFuncionario(idFuncionario).then(data => {
        if(data.affectedRows == 1){
            res.status(204).send("Funcionário deletado com sucesso.")
        }
    })

}

module.exports = {
    autenticar,
    cadastrar,
    listarFuncionario,
    deletarFuncionario
}