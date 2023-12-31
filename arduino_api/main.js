const serialport = require('serialport');
const express = require('express');
const mysql = require('mysql2');

const SERIAL_BAUD_RATE = 9600;
const SERVIDOR_PORTA = 3000;
const HABILITAR_OPERACAO_INSERIR = true;

const serial = async () => {
const poolBancoDados = mysql.createPool(
    {
        host: 'localhost',
        port: 3306,
        user: 'aluno',
        password: 'sptech',
        database: 'hardwarelife'
    }
).promise();

const inserirDadosSensor = async (temperatura, umidade, u , i) => {
    await poolBancoDados.execute(
        'INSERT INTO dados (temperatura, umidade, fk_sensor, fkRack) VALUES (?, ?, ?, ?)',
        [temperatura, umidade, u, i]
    );
}

const salvarDados = (temperatura, umidade) => {
     
    if (HABILITAR_OPERACAO_INSERIR) {
        for(var i = 1; i <= 8; i++){
            for(var u = 1; u <= 7; u++){
                if(u >= 1 && u < 7){
                    console.log("Inserindo temperatura", temperatura)
                    inserirDadosSensor(temperatura, null, u, i);
                }else{
                    console.log("Inserindo Umidade", umidade)
                    inserirDadosSensor(null, umidade, u, i);
                }
            }
        }
    }

}

const portas = await serialport.SerialPort.list();
const portaArduino = portas.find((porta) => porta.vendorId == 2341 && porta.productId == 43);
if (!portaArduino) {
    throw new Error('O arduino não foi encontrado em nenhuma porta serial');
}
const arduino = new serialport.SerialPort(
    {
        path: portaArduino.path,
        baudRate: SERIAL_BAUD_RATE
    }
);
arduino.on('open', () => {
    console.log(`A leitura do arduino foi iniciada na porta ${portaArduino.path} utilizando Baud Rate de ${SERIAL_BAUD_RATE}`);
});
arduino.pipe(new serialport.ReadlineParser({ delimiter: '\r\n' })).on('data', async (data) => {
    const valores = data.split(',');
    const dht11Umidade = parseFloat(valores[0]);
    const lm35Temperatura = parseFloat(valores[1]);

    salvarDados(lm35Temperatura, dht11Umidade)
   
    });
    arduino.on('error', (mensagem) => {
        console.error(`Erro no arduino (Mensagem: ${mensagem}`)
    });
}
    const app = express();
    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });

    (async () => {
        await serial()
    })()