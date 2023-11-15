// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_FUNCIONARIO
    var nomeEmpresa = sessionStorage.NOME_EMPRESA;

    var nome_empresa = document.getElementById("nome_empresa");

    if (email != null && nome != null) {
        nome_empresa.innerHTML = nomeEmpresa;
    } else {
        window.location = "../loginCadastro.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../loginCadastro.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

