// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var nomeEmpresa = sessionStorage.NOME_EMPRESA;

    var nome_empresa = document.getElementById("nome_empresa");
    var nome_usuario = document.getElementById("nome_usuario");

    if (email != null && nome != null) {
        nome_empresa.innerHTML = nomeEmpresa;
        nome_usuario.innerHTML = nome;
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

