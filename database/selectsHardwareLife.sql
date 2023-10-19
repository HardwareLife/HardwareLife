USE HardwareLife;

-- CONSULTAS QUE SERÃO COMUNS

-- Consulta para o filtro da dashboard (medições de temperatura)
SELECT d.temperatura, d.dataHora FROM dados as d JOIN sensor as s ON d.fk_sensor = s.idSensor JOIN rack as r ON s.fkRack = r.idRack 
JOIN sala ON r.fkSala = sala.idSala WHERE d.fk_sensor = s.idSensor AND s.fkRack = r.idRack AND r.fkSala = sala.idSala;

-- Consulta para pegar os sensores do rack
SELECT * FROM sensor JOIN rack ON sensor.fkRack = rack.idRack WHERE idRack = 1;

-- CONSULTAS PARA LOGIN
SELECT email_funcionario_empresa, senha FROM funcionario_empresa;

-- INSERÇÃO DE USUÁRIOS