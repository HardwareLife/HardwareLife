USE HardwareLife;

SELECT d.temperatura, d.umidade, idSensor, DATE_FORMAT(d.dataHora,'%H:%i:%s') as 'momento_grafico'
        FROM dados as d JOIN sensor as s ON d.fk_sensor = s.idSensor JOIN rack as r ON s.fkRack = r.idRack 
        WHERE s.fkRack = 1 order by idDados desc limit 7;

select * from funcionario;
-- CONSULTAS QUE SERÃO COMUNS

-- Consulta para o filtro da dashboard (medições de temperatura)
SELECT d.temperatura, d.dataHora FROM dados as d JOIN sensor as s ON d.fk_sensor = s.idSensor JOIN rack as r ON s.fkRack = r.idRack 
JOIN sala ON r.fkSala = sala.idSala WHERE d.fk_sensor = s.idSensor AND s.fkRack = r.idRack AND r.fkSala = sala.idSala AND d.temperatura <> 0;

-- Concsulta para o filtro da dashboard (medições de umidade)
SELECT d.umidade, d.dataHora FROM dados as d JOIN sensor as s ON d.fk_sensor = s.idSensor JOIN rack as r ON s.fkRack = r.idRack 
JOIN sala ON r.fkSala = sala.idSala WHERE sala.idSala = r.fkSala AND d.umidade <> 0;

-- Consulta para pegar os sensores do rack
SELECT * FROM sensor JOIN rack ON sensor.fkRack = rack.idRack WHERE idRack = 1;

-- CONSULTAS PARA LOGIN
SELECT email, senha FROM funcionario WHERE email = 'willians.vinicius@hardwarelife.com' AND senha = '123';

SELECT concat(nome, '', sobrenome) nome, cpf, email, senha, tipoNivel from funcionario WHERE tipoNivel = 'CEO';