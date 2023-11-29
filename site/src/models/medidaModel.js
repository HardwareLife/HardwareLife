var database = require("../database/config");

function buscarUltimasMedidas(idRack, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT d.temperatura, d.umidade, DATE_FORMAT(d.dataHora,'%H:%i:%s') as 'momento_grafico'
        FROM dados as d JOIN sensor as s ON d.fk_sensor = s.idSensor JOIN rack as r ON s.fkRack = r.idRack 
        WHERE s.fkRack = ${idRack} order by idDados desc limit 7;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idRack) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idRack} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT d.temperatura, d.umidade, idSensor, DATE_FORMAT(d.dataHora,'%H:%i:%s') as 'momento_grafico'
        FROM dados as d JOIN sensor as s ON d.fk_sensor = s.idSensor JOIN rack as r ON s.fkRack = r.idRack 
        WHERE s.fkRack = ${idRack} order by idDados desc limit 2;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMediaMensal(idRack){

    var instrucao = `SELECT CASE (SELECT distinct(month(dataHora))) 
        WHEN 1 THEN 'Janeiro'
        WHEN 2 THEN 'Fevereiro'
        WHEN 3 THEN 'Março'
        WHEN 4 THEN 'Abril'
        WHEN 5 THEN 'Maio'
        WHEN 6 THEN 'Junho'
        WHEN 7 THEN 'Julho'
        WHEN 8 THEN 'Agosto'
        WHEN 9 THEN 'Setembro'
        WHEN 10 THEN 'Outubro'
        WHEN 11 THEN 'Novembro'
        ELSE 'Dezembro'
        END AS mes,
    round(avg(temperatura),2) as temperaturaMedia,
    round(avg(umidade),2) as umidadeMedia
    FROM dados WHERE fkRack = ${idRack} GROUP BY mes ORDER BY mes DESC limit 6;`;

    return database.executar(instrucao)

}

function buscarMediaSemanal(idRack){

    var instrucao = `SELECT distinct DATE_FORMAT(dataHora, '%d-%m-%Y') as 'momento_grafico', round(avg(temperatura),1) as 'temperaturaMedia', 
    round(avg(umidade), 1) as 'umidadeMedia' FROM dados WHERE fkRack = ${idRack} AND dataHora BETWEEN TIMESTAMP(DATE_SUB(NOW(), INTERVAL 7 day)) 
    AND NOW() GROUP BY momento_grafico ORDER BY momento_grafico DESC limit 6;`;

    return database.executar(instrucao);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarMediaMensal,
    buscarMediaSemanal,
}
