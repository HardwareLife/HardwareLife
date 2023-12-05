var alertas = [];
var alertasUmidade = [];

var sensor = [];
var sensorUmid = [];

function obterdados(idRack) {
   fetch(`/medidas/ultimas/${idRack}`)
        .then(resposta => {
             if (resposta.status == 200) {
                resposta.json().then(resposta => {

                   console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                   for (i = 0; i < resposta.length; i++) {
                        var registro = resposta[i];
                    if(registro.umidade == null){
                        var temperatura = registro.temperatura
                    }else if(registro.temperatura == null){
                        var umidade = registro.umidade
                    }
                }


                   if(idRack == 1){
                    temperatura = temperatura * 1.6
                    umidade = umidade * 1.6
                    }else if(idRack == 8){
                        temperatura = temperatura * 0.6
                        umidade = umidade * 0.8
                    }

                    temperaturaSensor2 = Math.random() * 0.5 + temperatura
                    temperaturaSensor3 = Math.random() * 0.4 + temperatura
                    temperaturaSensor4 = Math.random() * 0.3 + temperatura
                    temperaturaSensor5 = Math.random() * -0.3 + temperatura
                    temperaturaSensor6 = Math.random() * -0.4 + temperatura

                    var listaSensores = [temperatura, temperaturaSensor2, temperaturaSensor3, temperaturaSensor4, temperaturaSensor5, temperaturaSensor6, umidade];
                    if(temperatura != null && umidade != null){
                        console.log(temperatura, umidade)
                        sensores(listaSensores, idRack);
    
                        alertar(temperatura, umidade, idRack);
                    }
                    
                 });
             } else {
                 console.error(`Nenhum dado encontrado para o id ${idRack} ou erro na API`);
             }
          })
         .catch(function (error) {
             console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
         });
}

function sensores(listaSensores, idRack) {
    // var dashRack = document.querySelector('.racks');
    
    console.log(listaSensores)

    // dashRack.innerHTML = "";
    // console.log(dashRack)

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
    
    for(var i = 0; i < listaSensores.length; i++){

        console.log(listaSensores.length)
        if (i == listaSensores.length-1) {

            if (listaSensores[i] >= limitesUmid.critico_alta) {
                desc = 'Umidade'
                nomeClasse = 'esfera_umidade_criticoA';
                exibirSensores(idRack, desc, nomeClasse,(i+1))
            }
            else if (listaSensores[i] < limitesUmid.critico_alta && listaSensores[i] >= limitesUmid.emer_alta) {
                desc = 'Umidade'
                nomeClasse = 'esfera_umidade_emerA'
                exibirSensores(idRack, desc, nomeClasse,(i+1))
            }
            else if(listaSensores[i] < limitesUmid.emer_alta && listaSensores[i] >= limitesUmid.alert_alta){
                desc = 'Umidade'
                nomeClasse = 'esfera_umidade_alertA'
                exibirSensores(idRack, desc, nomeClasse,(i+1))
            }
            else if (listaSensores[i] < limitesUmid.alert_alta && listaSensores[i] > limitesUmid.alert_baixa) {
                desc = 'Umidade'
                nomeClasse = 'esfera_umidade_ideal'
                exibirSensores(idRack, desc, nomeClasse,(i+1))
        
            }else if(listaSensores[i] < limitesUmid.alert_baixa && listaSensores[i] > limitesUmid.emer_baixa){
                desc = 'Umidade'
                nomeClasse = 'esfera_umidade_alerta'
                exibirSensores(idRack, desc, nomeClasse,(i+1))
            }
            else if (listaSensores[i] <= limitesUmid.emer_baixa && listaSensores[i] > limitesUmid.critico_baixa) {
                desc = 'Umidade'
                nomeClasse = 'esfera_umidade_emergencia'
                exibirSensores(idRack, desc, nomeClasse,(i+1))
            }
            else if (listaSensores[i] <= limitesUmid.critico_baixa) {
                desc = 'Umidade'
                nomeClasse = 'esfera_umidade_critico'
                exibirSensores(idRack, desc, nomeClasse,(i+1))
            }
            
        }else{

            if (listaSensores[i] >= limites.critico_quente) {
                desc = 'Temperatura'
                nomeClasse = 'critico_qt'
                exibirSensores(idRack, desc, nomeClasse,(i+1));
            }
            else if (listaSensores[i] < limites.critico_quente && listaSensores[i] >= limites.emer_quente) {
                desc = 'Temperatura'
                nomeClasse = 'emergencia_qt'
                exibirSensores(idRack, desc, nomeClasse,(i+1));
            }
            else if(listaSensores[i] < limites.emer_quente && listaSensores[i] >= limites.alert_quente){
                desc = 'Temperatura'
                nomeClasse = 'alerta_qt'
                exibirSensores(idRack, desc, nomeClasse,(i+1));
            }
            else if (listaSensores[i] < limites.alert_quente && listaSensores[i] > limites.alert_frio) {
                desc = 'Temperatura'
                nomeClasse = 'ideal'
                exibirSensores(idRack, desc, nomeClasse,(i+1));
        
            }else if(listaSensores[i] <= limites.alert_frio && listaSensores[i] > limites.emer_frio){
                desc = 'Temperatura'
                nomeClasse = 'alerta_fr'
                exibirSensores(idRack, desc, nomeClasse,(i+1));
            }
            else if (listaSensores[i] <= limites.emer_frio && listaSensores[i] > limites.critico_frio) {
                desc = 'Temperatura'
                nomeClasse = 'emergencia_fr'
                exibirSensores(idRack, desc, nomeClasse,(i+1));
            }
            else if (listaSensores[i] <= limites.critico_frio) {
                desc = 'Temperatura'
                nomeClasse = 'critico_fr'
                exibirSensores(idRack, desc, nomeClasse,(i+1));
            }
        }
    }
}

function exibirSensores(idRack, desc, nomeClasse, idSensor) {
    var indice = sensor.findIndex(item => item.idRack == idRack && item.idSensor == idSensor);
    var indiceUmidade = sensorUmid.findIndex(item => item.idRack == idRack && item.idSensor == idSensor)

    if(desc == "Temperatura"){
        if (indice >= 0) {
            sensor[indice] = {idRack, desc, nomeClasse, idSensor}
        } else {
            sensor.push({idRack, desc, nomeClasse, idSensor});
        }
    }
    if(desc == "Umidade"){
        if (indiceUmidade >= 0) {
            sensorUmid[indiceUmidade] = { idRack, desc, nomeClasse, idSensor}
        } else {
            sensorUmid.push({ idRack, desc, nomeClasse, idSensor});
        }
    }

    exibir(idRack);
}

function exibir(idRack) {
    var dashRack = document.querySelector('.racks');
    dashRack.innerHTML = '';

    filtroSensor = sensor.filter(item => item.desc == 'Temperatura' && item.idRack == idRack)
    filtroSensorUmidade = sensorUmid.filter(item => item.desc == 'Umidade' && item.idRack == idRack)

    console.log(filtroSensor, filtroSensorUmidade)

    for (var i = 0; i < filtroSensor.length; i++) {
            var mensagem = filtroSensor[i];
            dashRack.innerHTML += transformarEmBolinha(mensagem);
    }

    for(var i = 0; i < filtroSensorUmidade.length; i++){
            var mensagem = filtroSensorUmidade[i]
            dashRack.innerHTML += transformarEmBolinha(mensagem)
    }
}

function transformarEmBolinha(mensagem) {

    var descricao = JSON.parse(sessionStorage.SALAS).filter(item => {
        return item.idRack == mensagem.idRack
    })
    console.log(descricao)

    console.log(mensagem)
    if (mensagem.desc == 'Temperatura') {
        return `
            <div class="sensor">
                <div class="${mensagem.nomeClasse} esfera"></div>
                <p>${mensagem.desc}</p>
            </div>
        `;
    }else if(mensagem.desc == 'Umidade'){
        return `
        <div class="sensor">
                <div class="${mensagem.nomeClasse} esfera"></div>
                <p>${mensagem.desc}</p>
            </div>
        `;
    }
    
}

function alertar(temperaturaSensor, umidadeSensor, idRack) {
    var temp = temperaturaSensor;
    var umid = umidadeSensor;
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
    var indiceUmidade = alertasUmidade.findIndex(item => item.idRack == idRack)

    if(caso == "temperatura"){
        if (indice >= 0) {
            alertas[indice] = { idRack, caso, grauDeAviso, grauDeAvisoCor, corSala, nomeClasse, valor }
        } else {
            alertas.push({ idRack, caso, grauDeAviso, grauDeAvisoCor, corSala, nomeClasse, valor });
        }
    }
    if(caso == "umidade"){
        if (indiceUmidade >= 0) {
            alertasUmidade[indiceUmidade] = { idRack, caso, grauDeAviso, grauDeAvisoCor, corSala, nomeClasse, valor }
        } else {
            alertasUmidade.push({ idRack, caso, grauDeAviso, grauDeAvisoCor, corSala, nomeClasse, valor });
        }
    }

    exibirCards();
}

function removerAlerta(idRack) {
    alertas = alertas.filter(item => item.idRack != idRack);
    alertasUmidade = alertasUmidade.filter(item => item.idRack != idRack)
    exibirCards();
}

function exibirCards() {
    card_alerta.innerHTML = '';
    // var mensagemUtilizada = [];
    console.log(alertas)
    for (var i = 0; i < alertas.length; i++) {
            var mensagem = alertas[i];
            card_alerta.innerHTML += transformarEmDiv(mensagem);
    }

    for(var i = 0; i < alertasUmidade.length; i++){
            var mensagem = alertasUmidade[i]
            card_alerta.innerHTML += transformarEmDiv(mensagem)
    }
}
   

function transformarEmDiv(mensagem) {

    var descricao = JSON.parse(sessionStorage.SALAS).filter(item => {
        return item.idRack == mensagem.idRack
    })
    console.log(descricao)

    console.log(mensagem)
    if (mensagem.caso == 'temperatura') {
        return `
        <div class="${mensagem.grauDeAvisoCor} card_alerta" style="display: flex;">
                <img src="../assets/dashboard/triangle-alerta.svg" alt="" style="width: 30px;">
                <div class="mensagem-alarme">
                    <h3>Rack ${descricao[0].numeroRack} da Sala ${descricao[0].numeroSala} está com ${mensagem.grauDeAviso}!</h3>
                    <small>Temperatura ${(mensagem.valor).toFixed(2)}.</small>
                </div>
            </div>
        `;
    }else if(mensagem.caso == 'umidade'){
        return `
        <div class="${mensagem.grauDeAvisoCor} card_alerta" style="display: flex;">
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
    setTimeout(atualizacaoPeriodica, 8000);
}
