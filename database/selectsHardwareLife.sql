USE HardwareLife;

-- CONSULTAS QUE SERÃO COMUNS

-- Consulta para o filtro da dashboard (medições de temperatura)
SELECT d.valor, d.dataHora FROM dados as d JOIN sensor as s ON d.fk_sensor = s.idSensor JOIN rack as r ON s.fkRack = r.idRack 
JOIN sala ON r.fkSala = sala.idSala WHERE d.fk_sensor = s.idSensor AND s.fkRack = r.idRack AND r.fkSala = sala.idSala AND d.fkUnidade = 1;

-- Concsulta para o filtro da dashboard (medições de umidade)
SELECT d.valor, d.dataHora FROM dados as d JOIN sensor as s ON d.fk_sensor = s.idSensor JOIN rack as r ON s.fkRack = r.idRack 
JOIN sala ON r.fkSala = sala.idSala WHERE sala.idSala = r.fkSala AND d.fkUnidade = 2;

-- Consulta para pegar os sensores do rack
SELECT * FROM sensor JOIN rack ON sensor.fkRack = rack.idRack WHERE idRack = 1;

-- CONSULTAS PARA LOGIN
SELECT email, senha FROM usuario;

-- CONSULTAS PARA CADASTRAR USUARIOS;
INSERT INTO usuario VALUES (null, 'AmazonJundiai@hardwarelife.com', '123@',false, 2);