var alertas = [];

function obterdados(idRack) {
   fetch(`/medidas/ultimas/${idRack}`)
        .then(resposta => {
             if (resposta.status == 200) {
                resposta.json().then(resposta => {

                   console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                   var temperaturaSensor = resposta[0].temperatura;
                   var umidadeSensor = resposta[0].umidade;

                   if(idRack == 1 || idRack == 2){
                    temperaturaSensor = temperaturaSensor * 1.6
                    umidadeSensor = umidadeSensor * 1.6
                    }else if(idRack == 3 || idRack == 4){
                        temperaturaSensor = temperaturaSensor * 1.2
                        umidadeSensor = umidadeSensor * 1.2
                    }else if(idRack == 7 || idRack == 8){
                        temperaturaSensor = temperaturaSensor * 0.6
                        umidadeSensor = umidadeSensor * 0.8
                    }

                    temperaturaSensor2 = Math.random() * 0.5 + temperaturaSensor
                    temperaturaSensor3 = Math.random() * 0.4 + temperaturaSensor
                    temperaturaSensor4 = Math.random() * 0.3 + temperaturaSensor
                    temperaturaSensor5 = Math.random() * -0.3 + temperaturaSensor
                    temperaturaSensor6 = Math.random() * -0.4 + temperaturaSensor

                    alertar(temperaturaSensor, umidadeSensor, idRack);
                 });
             } else {
                 console.error(`Nenhum dado encontrado para o id ${idRack} ou erro na API`);
             }
          })
         .catch(function (error) {
             console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
         });
}

// function sensores(temperaturaSensor2, temperaturaSensor3, temperaturaSensor4, temperaturaSensor5, temperaturaSensor6, umidadeSensor, idRack) {
    
// }

function alertar(temperaturaSensor, umidadeSensor, idRack) {
    var temp = temperaturaSensor;
    var umid = umidadeSensor;
    var caso;
    var corSala;

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

    var classe_temperatura = 'ideal';

    // TEMPERATURA

    if (temp >= limites.critico_quente) {
        classe_temperatura = 'critico_qt';
        grauDeAviso = 'Temperaturas muito elevadas';
        grauDeAvisoCor = 'critico_qt';
        casoTemp = 'temperatura';
        corSala = '#ff0000';
        nomeClasse = 'animacao'
        exibirAlerta(idRack, grauDeAviso, grauDeAvisoCor, casoTemp, corSala, nomeClasse, temp);
    }
    else if (temp < limites.critico_quente && temp >= limites.emer_quente) {
        classe_temperatura = 'emergencia_qt';
        grauDeAviso = 'Temperaturas elevadas'
        grauDeAvisoCor = 'emergencia_qt'
        casoTemp = 'temperatura';
        corSala = '#ff4600';
        nomeClasse = 'animacao'
        exibirAlerta(idRack, grauDeAviso, grauDeAvisoCor, casoTemp, corSala, nomeClasse, temp)
    }
    else if(temp < limites.emer_quente && temp >= limites.alert_quente){
        classe_temperatura = 'alerta_qt';
        grauDeAviso = 'Temperaturas estão ficando elevadas'
        grauDeAvisoCor = 'alerta_qt'
        casoTemp = 'temperatura';
        corSala = '#ffa500';
        nomeClasse = 'animacao'
        exibirAlerta(idRack, grauDeAviso, grauDeAvisoCor, casoTemp, corSala, nomeClasse, temp)
    }
    else if (temp < limites.alert_quente && temp > limites.alert_frio) {
        classe_temperatura = 'ideal';
        corSala = '#008000';
        removerAlerta(idRack);

    }else if(temp <= limites.alert_frio && temp > limites.emer_frio){
        classe_temperatura = 'alerta_fr';
        grauDeAviso = 'Temperaturas estão ficando abaixo do indicado'
        grauDeAvisoCor = 'alerta_fr'
        casoTemp = 'temperatura';
        corSala = '#19e5e6';
        nomeClasse = 'animacao'
        exibirAlerta(idRack, grauDeAviso, grauDeAvisoCor, casoTemp, corSala, nomeClasse, temp)
    }
    else if (temp <= limites.emer_frio && temp > limites.critico_frio) {
        classe_temperatura = 'emergencia_fr';
        grauDeAviso = 'Temperaturas estão ficando baixas'
        grauDeAvisoCor = 'emergencia_fr'
        casoTemp = 'temperatura';
        corSala = '#10b8d6';
        nomeClasse = 'animacao'
        exibirAlerta(idRack, grauDeAviso, grauDeAvisoCor, casoTemp, corSala, nomeClasse, temp)
    }
    else if (temp <= limites.critico_frio) {
        classe_temperatura = 'critico_fr';
        grauDeAviso = 'Temperaturas muito baixas'
        grauDeAvisoCor = 'critico_fr'
        casoTemp = 'temperatura';
        corSala = '#191970';
        nomeClasse = 'animacao'
        exibirAlerta(idRack, grauDeAviso, grauDeAvisoCor, casoTemp, corSala, nomeClasse, temp)
    }

    // UMIDADE

    var limitesUmid = {
        critico_alta: 80,
        emer_alta: 70,
        alert_alta: 60,
        ideal: 45,
        alert_baixa: 40,
        emer_baixa: 30,
        critico_baixa: 20
    }


    if (umid >= limitesUmid.critico_alta) {
        classe_temperatura = 'critico_qt';
        grauDeAviso = 'Nível de umidade muito elevado'
        grauDeAvisoCor = 'critico_qt'
        casoUmi = 'umidade';
        corSala = '#ff0000';
        nomeClasse = 'animacao'
        exibirAlerta(idRack, grauDeAviso, grauDeAvisoCor, casoUmi, corSala, nomeClasse, umid)
    }
    else if (umid < limitesUmid.critico_alta && umid >= limitesUmid.emer_alta) {
        classe_temperatura = 'emergencia_qt';
        grauDeAviso = 'Nível de umidade elevado'
        grauDeAvisoCor = 'emergencia_qt'
        casoUmi = 'umidade';
        corSala = '#ff4600';
        nomeClasse = 'animacao'
        exibirAlerta(idRack, grauDeAviso, grauDeAvisoCor, casoUmi, corSala, nomeClasse, umid)
    }
    else if(umid < limitesUmid.emer_alta && umid >= limitesUmid.alert_alta){
        classe_temperatura = 'alerta_qt';
        grauDeAviso = 'Os niveis de umidade estão ficando elevados'
        grauDeAvisoCor = 'alerta_qt'
        casoUmi = 'umidade';
        corSala = '#ffa500';
        nomeClasse = 'animacao'
        exibirAlerta(idRack, grauDeAviso, grauDeAvisoCor, casoUmi, corSala, nomeClasse, umid)
    }
    else if (umid < limitesUmid.alert_alta && umid > limitesUmid.alert_baixa) {
        classe_temperatura = 'ideal';
        corSala = '#008000';
        removerAlerta(idRack);

    }else if(umid < limitesUmid.alert_baixa && umid > limitesUmid.emer_baixa){
        classe_temperatura = 'alerta_fr';
        grauDeAviso = 'Niveis de umidade estão ficando abaixo do indicado'
        grauDeAvisoCor = 'alerta_fr'
        casoUmi = 'umidade';
        corSala = '#19e5e6';
        nomeClasse = 'animacao'
        exibirAlerta(idRack, grauDeAviso, grauDeAvisoCor, casoUmi, corSala, nomeClasse, umid)
    }
    else if (umid <= limitesUmid.emer_baixa && umid > limitesUmid.critico_baixa) {
        classe_temperatura = 'emergencia_fr';
        grauDeAviso = 'Os niveis de umidade estão ficando baixos'
        grauDeAvisoCor = 'emergencia_fr'
        casoUmi = 'umidade';
        corSala = '#10b8d6';
        nomeClasse = 'animacao'
        exibirAlerta(idRack, grauDeAviso, grauDeAvisoCor, casoUmi, corSala, nomeClasse, umid)
    }
    else if (umid <= limitesUmid.critico_baixa) {
        classe_temperatura = 'critico_fr';
        grauDeAviso = 'Niveis de umidade muito baixos'
        grauDeAvisoCor = 'critico_fr'
        casoUmi = 'umidade';
        corSala = '#191970';
        nomeClasse = 'animacao'
        exibirAlerta(idRack, grauDeAviso, grauDeAvisoCor, casoUmi, corSala, nomeClasse, umid)
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

function exibirAlerta(idRack, grauDeAviso, grauDeAvisoCor, caso, corSala, nomeClasse, valor) {
    var indice = alertas.findIndex(item => item.idRack == idRack);

    if (indice >= 0) {
        alertas[indice] = { idRack, caso, grauDeAviso, grauDeAvisoCor, corSala, nomeClasse, valor }
    } else {
        alertas.push({ idRack, caso, grauDeAviso, grauDeAvisoCor, corSala, nomeClasse, valor });
    }

    exibirCards();
}

function removerAlerta(idRack) {
    alertas = alertas.filter(item => item.idRack != idRack);
    exibirCards();
}

function exibirCards() {
    card_alerta.innerHTML = '';
    // var mensagemUtilizada = [];

    for (var i = 0; i < alertas.length; i++) {
            var mensagem = alertas[i];
            card_alerta.innerHTML += transformarEmDiv(mensagem);
    }
}

function sensores() {
    
}

function transformarEmDiv(mensagem) {

    var descricao = JSON.parse(sessionStorage.SALAS).filter(item => {
        return item.idRack == mensagem.idRack
    })
    console.log(descricao)

    console.log(mensagem.caso)
    if (mensagem.caso == 'temperatura') {
        return `
        <div class="${grauDeAvisoCor} card_alerta" style = "display: flex">
                <img src="../assets/dashboard/triangle-alerta.svg" alt="" style="width: 30px;">
                <div class="mensagem-alarme">
                    <h3>Rack ${descricao[0].numeroRack} da Sala ${descricao[0].numeroSala} está com ${mensagem.grauDeAviso}!</h3>
                    <small>Temperatura ${(mensagem.valor).toFixed(2)}.</small>
                </div>
            </div>
        `;
    }else if(mensagem.caso == 'umidade'){
        return `
        <div class="${grauDeAvisoCor} card_alerta" style = "display: flex">
                <img src="../assets/dashboard/triangle-alerta.svg" alt="" style="width: 30px;">
                <div class="mensagem-alarme">
                    <h3>Rack ${descricao[0].numeroRack} da Sala ${descricao[0].numeroSala} está com ${mensagem.grauDeAviso}!</h3>
                    <small>Umidade ${(mensagem.valor).toFixed(2)}.</small>
                </div>
            </div>
        `;
    }
            
 
}

function atualizacaoPeriodica() {
    JSON.parse(sessionStorage.SALAS).forEach(item => {
        obterdados(item.idRack)
    });
    setTimeout(atualizacaoPeriodica, 5000);
}
