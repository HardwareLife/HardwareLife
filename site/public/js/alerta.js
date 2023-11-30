var alertas = [];

// function obterdados(idAquario) {
//     fetch(`/medidas/tempo-real/${idAquario}`)
//         .then(resposta => {
//             if (resposta.status == 200) {
//                 resposta.json().then(resposta => {

//                     console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

//                     alertar(resposta, idAquario);
//                 });
//             } else {
//                 console.error(`Nenhum dado encontrado para o id ${idAquario} ou erro na API`);
//             }
//         })
//         .catch(function (error) {
//             console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
//         });
// }

function alertar(temperaturaSensor, idRack) {
    var temp = temperaturaSensor;

    var grauDeAviso = '';

    var limites = {
        critico_quente: 40,
        emer_quente: 34,
        alert_quente: 30,
        ideal: 24,
        alert_frio: 23.8,
        emer_frio: 19.5,
        critico_frio: 18
    };

    var classe_temperatura = 'esfera_ideal';

    if (temp >= limites.critico_quente) {
        classe_temperatura = 'esfera_critica';
        grauDeAviso = 'Temperaturas muito elevadas'
        grauDeAvisoCor = 'esfera_critica'
        exibirAlerta(temp, idRack, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.critico_quente && temp >= limites.emer_quente) {
        classe_temperatura = 'esfera_emer';
        grauDeAviso = 'Temperaturas elevadas'
        grauDeAvisoCor = 'esfera_emer'
        exibirAlerta(temp, idRack, grauDeAviso, grauDeAvisoCor)
    }
    else if(temp < limites.emer_quente && temp >= limites.alert_quente){
        classe_temperatura = 'esfera_irregular';
        grauDeAviso = 'Temperaturas estão ficando elevadas'
        grauDeAvisoCor = 'esfera_irregular'
        exibirAlerta(temp, idRack, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.alert_quente && temp > limites.alert_frio) {
        classe_temperatura = 'esfera_ideal';
        removerAlerta(idRack);

    }else if(temp < limites.alert_frio && temp > limites.emer_frio){
        classe_temperatura = 'esfera_irregular';
        grauDeAviso = 'Temperaturas estão ficando abaixo do esperado'
        grauDeAvisoCor = 'esfera_emer'
        exibirAlerta(temp, idRack, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp <= emer_frio && temp > limites.critico_frio) {
        classe_temperatura = 'esfera_emer';
        grauDeAviso = 'Temperaturas estão ficando baixas'
        grauDeAvisoCor = 'esfera_irregular'
        exibirAlerta(temp, idRack, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp <= limites.critico_frio) {
        classe_temperatura = 'esfera_critica';
        grauDeAviso = 'Temperaturas muito baixas'
        grauDeAvisoCor = 'esfera_critica'
        exibirAlerta(temp, idRack, grauDeAviso, grauDeAvisoCor)
    }

    // var card;

    // if (document.getElementById(`temp_aquario_${idAquario}`) != null) {
    //     document.getElementById(`temp_aquario_${idAquario}`).innerHTML = temp + "°C";
    // }

    // if (document.getElementById(`card_${idRack}`)) {
    //     card = document.getElementById(`card_${idRack}`)
    //     card.className = classe_temperatura;
    // }
}

function exibirAlerta(temp, idRack, grauDeAviso, grauDeAvisoCor) {
    var indice = alertas.findIndex(item => item.idRack == idRack);

    if (indice >= 0) {
        alertas[indice] = { idRack, temp, grauDeAviso, grauDeAvisoCor }
    } else {
        alertas.push({ idRack, temp, grauDeAviso, grauDeAvisoCor });
    }

    exibirCards();
}

function removerAlerta(idRack) {
    alertas = alertas.filter(item => item.idRack != idRack);
    exibirCards();
}

function exibirCards() {
    card_alerta.innerHTML = '';

    for (var i = 0; i < alertas.length; i++) {
        var mensagem = alertas[i];
        card_alerta.innerHTML += transformarEmDiv(mensagem);
    }
}

function transformarEmDiv({ idRack, temp, grauDeAviso, grauDeAvisoCor }) {

    var descricao = JSON.parse(sessionStorage.SALAS).find(item => item.idRack == idRack).numeroSala;
    return `
    <div class="mensagem-alarme">
        <div class="informacao">
            <div class="${grauDeAvisoCor}"></div> 
            <h3>${descricao} está em estado de ${grauDeAviso}!</h3>
            <small>Temperatura ${temp}.</small>   
        </div>
        <div class="alarme-sino"></div>
    </div>
    `;
}

// function atualizacaoPeriodica() {
//     JSON.parse(sessionStorage.SALAS).forEach(item => {
//         obterdados(item.id)
//     });
//     setTimeout(atualizacaoPeriodica, 5000);
// }
