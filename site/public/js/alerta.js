var alertas = [];

function obterdados(temperaturaSensor, umidadeSensor, idRack) {
    var temperatura = temperaturaSensor;
    var umidade = umidadeSensor
    // fetch(`/medidas/tempo-real/${idRack}`)
    //     .then(resposta => {
            // if (resposta.status == 200) {
            //     resposta.json().then(resposta => {

            //         console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(temperatura, umidade, idRack);
        //         });
        //     } else {
        //         console.error(`Nenhum dado encontrado para o id ${idAquario} ou erro na API`);
        //     }
        // // })
        // .catch(function (error) {
        //     console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
        // });
}

function alertar(temperatura, umidade, idRack) {
    var temp= temperatura;
    var umid = umidade;
    var caso;

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

    var limitesUmid = {
        critico_alta: 80,
        emer_alta: 70,
        alert_alta: 60,
        ideal: 45,
        alert_baixa: 40,
        emer_baixa: 30,
        critico_baixa: 20
    }

    var classe_temperatura = 'ideal';

    // TEMPERATURA

    if (temp >= limites.critico_quente) {
        classe_temperatura = 'critico_qt';
        grauDeAviso = 'Temperaturas muito elevadas';
        grauDeAvisoCor = 'critico_qt';
        caso = temp;
        exibirAlerta(caso, idRack, grauDeAviso, grauDeAvisoCor);
    }
    else if (temp < limites.critico_quente && temp >= limites.emer_quente) {
        classe_temperatura = 'emergencia_qt';
        grauDeAviso = 'Temperaturas elevadas'
        grauDeAvisoCor = 'emergencia_qt'
        caso = temp;
        exibirAlerta(caso, idRack, grauDeAviso, grauDeAvisoCor)
    }
    else if(temp < limites.emer_quente && temp >= limites.alert_quente){
        classe_temperatura = 'alerta_qt';
        grauDeAviso = 'Temperaturas estão ficando elevadas'
        grauDeAvisoCor = 'alerta_qt'
        caso = temp;
        exibirAlerta(caso, idRack, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.alert_quente && temp > limites.alert_frio) {
        classe_temperatura = 'ideal';
        removerAlerta(idRack);

    }else if(temp < limites.alert_frio && temp > limites.emer_frio){
        classe_temperatura = 'alerta_fr';
        grauDeAviso = 'Temperaturas estão ficando abaixo do indicado'
        grauDeAvisoCor = 'alerta_fr'
        caso = temp;
        exibirAlerta(caso, idRack, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp <= limites.emer_frio && temp > limites.critico_frio) {
        classe_temperatura = 'emergencia_fr';
        grauDeAviso = 'Temperaturas estão ficando baixas'
        grauDeAvisoCor = 'emergencia_fr'
        caso = temp;
        exibirAlerta(caso, idRack, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp <= limites.critico_frio) {
        classe_temperatura = 'critico_fr';
        grauDeAviso = 'Temperaturas muito baixas'
        grauDeAvisoCor = 'critico_fr'
        caso = temp;
        exibirAlerta(caso, idRack, grauDeAviso, grauDeAvisoCor)
    }

    // UMIDADE

    if (umid >= limitesUmid.critico_quente) {
        classe_temperatura = 'critico_qt';
        grauDeAviso = 'Nível de umidade muito elevado'
        grauDeAvisoCor = 'critico_qt'
        caso = umid;
        exibirAlerta(caso, idRack, grauDeAviso, grauDeAvisoCor)
    }
    else if (umid < limitesUmid.critico_quente && umid >= limitesUmid.emer_quente) {
        classe_temperatura = 'emergencia_qt';
        grauDeAviso = 'Nível de umidade elevado'
        grauDeAvisoCor = 'emergencia_qt'
        caso = umid;
        exibirAlerta(caso, idRack, grauDeAviso, grauDeAvisoCor)
    }
    else if(umid < limitesUmid.emer_quente && umid >= limitesUmid.alert_quente){
        classe_temperatura = 'alerta_qt';
        grauDeAviso = 'Os niveis de umidade estão ficando elevados'
        grauDeAvisoCor = 'alerta_qt'
        caso = umid;
        exibirAlerta(caso, idRack, grauDeAviso, grauDeAvisoCor)
    }
    else if (umid < limitesUmid.alert_quente && umid > limitesUmid.alert_frio) {
        classe_temperatura = 'ideal';
        removerAlerta(idRack);

    }else if(umid < limitesUmid.alert_frio && umid > limitesUmid.emer_frio){
        classe_temperatura = 'alerta_fr';
        grauDeAviso = 'Niveis de umidade estão ficando abaixo do indicado'
        grauDeAvisoCor = 'alerta_fr'
        caso = umid;
        exibirAlerta(caso, idRack, grauDeAviso, grauDeAvisoCor)
    }
    else if (umid <= limitesUmid.emer_frio && umid > limitesUmid.critico_frio) {
        classe_temperatura = 'emergencia_fr';
        grauDeAviso = 'Os niveis de umidade estão ficando baixos'
        grauDeAvisoCor = 'emergencia_fr'
        caso = umid;
        exibirAlerta(caso, idRack, grauDeAviso, grauDeAvisoCor)
    }
    else if (umid <= limitesUmid.critico_frio) {
        classe_temperatura = 'critico_fr';
        grauDeAviso = 'Niveis de umidade muito baixos'
        grauDeAvisoCor = 'critico_fr'
        caso = umid;
        exibirAlerta(caso, idRack, grauDeAviso, grauDeAvisoCor)
    }

    var card;

    if (document.getElementById(`temp_aquario_${idAquario}`) != null) {
        document.getElementById(`temp_aquario_${idAquario}`).innerHTML = temp + "°C";
    }

    if (document.getElementById(`card_${idRack}`)) {
        card = document.getElementById(`card_${idRack}`)
        card.className = classe_temperatura;
    }
}

function exibirAlerta(caso, idRack, grauDeAviso, grauDeAvisoCor) {
    var indice = alertas.findIndex(item => item.idRack == idRack);

    if (indice >= 0) {
        alertas[indice] = { idRack, caso, grauDeAviso, grauDeAvisoCor }
    } else {
        alertas.push({ idRack, caso, grauDeAviso, grauDeAvisoCor });
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

function transformarEmDiv(mensagem) {

    var descricao = JSON.parse(sessionStorage.SALAS).filter(item => {
        return item.idRack == mensagem.idRack
    })
    console.log(descricao)

    return `
     <div class="${grauDeAvisoCor} informacao">
			<img src="../assets/dashboard/triangle-alerta.svg" alt="" style="width: 30px;">
			<div class="mensagem-alarme">
				<h3>Rack ${descricao[0].numeroRack} da Sala ${descricao[0].numeroSala} está com ${mensagem.grauDeAviso}!</h3>
				<small>Temperatura ${mensagem.caso}.</small>
			</div>
		</div>
    `;
}

// function atualizacaoPeriodica() {
//     JSON.parse(sessionStorage.SALAS).forEach(item => {
//         obterdados(item.id)
//     });
//     setTimeout(atualizacaoPeriodica, 5000);
// }
