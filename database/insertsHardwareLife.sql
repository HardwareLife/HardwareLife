USE HardwareLife;

INSERT INTO empresa VALUES
(null, '06.990.590/0001-23' ,'Google Brasil','Google Brasil Internet LTDA','GOOGLEBRASIL@GOOGLE.COM', '11 23958400'),
(null, '00.623.904/0001-73','Apple Brasil','Apple Computer Brasil Ltda.','FISCAL@APPLE.COM','11 55030000');

INSERT INTO endereco VALUES 
(null, 'AV. Brigadeiro Faria Lima','3900','Pinheiros','São Paulo','SP','04538-133', 1),
(null, 'Rodovia Vice-Prefeito Hermenegildo Tonolli','1500','Distrito Industrial','Jundiaí','SP','13213-086', 2);

INSERT INTO usuario VALUES
(null, 'leonardo.arakaki@hardwarelife.com','123',true ,null),
(null, 'willians.vinicius@hardwarelife.com','123', true, null),
(null, 'giovanna.franca@hardwarelife.com','123', true, null),
(null, 'ian.silva@hardwarelife.com','123', true, null),
(null, 'julia.camargo@hardwarelife.com','123', true, null),
(null, 'ana.beatriz@hardwarelife.com','123', true, null),
(null, 'joão.henrique@GOOGLE.COM','123', false, 2),
(null, 'maria.eduarda@APPLE.COM','123', false, 1);

INSERT INTO sala VALUES 
(null, 1, 1), 
(null, 1, 2), 
(null, 2, 1), 
(null, 2, 2);

INSERT INTO rack VALUES 
(null, 1, 1), (null, 2, 1),
(null, 1, 2), (null, 2, 2),
(null, 1, 3), (null, 2, 3),
(null, 1, 4), (null, 2, 4);

INSERT INTO sensor VALUES
(1, 'LM35', 'Temperatura', 1, 1, 1, 1), (2, 'LM35','Temperatura', 1, 2, 1, 1), (3, 'LM35','Temperatura',1, 1, 2, 1), (4, 'LM35','Temperatura',1, 2, 2, 1), (5, 'LM35','Temperatura',1, 1, 3, 1),(6, 'LM35','Temperatura',1, 2, 3, 1),

(1, 'LM35','Temperatura',2, 1, 1, 2),(2, 'LM35','Temperatura',2, 2, 1, 2),(3, 'LM35','Temperatura',2, 1, 2, 2),(4, 'LM35','Temperatura',2, 2, 2, 2),(5, 'LM35','Temperatura',2, 1, 3, 2),(6, 'LM35','Temperatura',2, 2, 3, 2),

(1, 'LM35','Temperatura',3, 1, 1, 3),(2, 'LM35','Temperatura',3, 2, 1, 3),(3, 'LM35','Temperatura',3, 1, 2, 3),(4, 'LM35','Temperatura',3, 2, 2, 3),(5, 'LM35','Temperatura',3, 1, 3, 3),(6, 'LM35','Temperatura',3, 2, 3, 3),

(1, 'LM35','Temperatura',4, 1, 1, 4),(2, 'LM35','Temperatura',4, 2, 1, 4),(3, 'LM35','Temperatura',4, 1, 2, 4),(4, 'LM35','Temperatura',4, 2, 2, 4),(5, 'LM35','Temperatura',4, 1, 3, 4),(6, 'LM35','Temperatura',4, 2, 3, 4),

(1, 'LM35','Temperatura',5, 1, 1, 5),(2, 'LM35','Temperatura',5, 2, 1, 5),(3, 'LM35','Temperatura',5, 1, 2, 5),(4, 'LM35','Temperatura',5, 2, 2, 5),(5, 'LM35','Temperatura',5, 1, 3, 5),(6, 'LM35','Temperatura',5, 2, 3, 5),

(1, 'LM35','Temperatura',6, 1, 1, 6),(2, 'LM35','Temperatura',6, 2, 1, 6),(3, 'LM35','Temperatura',6, 1, 2, 6),(4, 'LM35','Temperatura',6, 2, 2, 6),(5, 'LM35','Temperatura',6, 1, 3, 6),(6, 'LM35','Temperatura',6, 2, 3, 6),

(1, 'LM35','Temperatura',7, 1, 1, 7),(2, 'LM35','Temperatura',7, 2, 1, 7),(3, 'LM35','Temperatura',7, 1, 2, 7),(4, 'LM35','Temperatura',7, 2, 2, 7),(5, 'LM35','Temperatura',7, 1, 3, 7),(6, 'LM35','Temperatura',7, 2, 3, 7),

(1, 'LM35','Temperatura',8, 1, 1, 8),(2, 'LM35','Temperatura',8, 2, 1, 8),(3, 'LM35','Temperatura',8, 1, 2, 8),(4, 'LM35','Temperatura',8, 2, 2, 8),(5, 'LM35','Temperatura',8, 1, 3, 8),(6, 'LM35','Temperatura',8, 2, 3, 8);

INSERT INTO sensor VALUES (null, 'DHT11', 'Umidade', null, null, null, 1),
(null, 'DHT11', 'Umidade', null, null, null, 2);

INSERT INTO unidade VALUES (null, "ºC"), (null, "%");

INSERT INTO dados VALUES
(1, '2023-09-12 10:00:00', 27.3,1,1),
(2, '2023-09-12 10:01:00',  28.1,1,1),
(3, '2023-09-12 10:02:00', 28.6,1,1),
(4, '2023-09-12 10:03:00', 28.0,1,1),
(5, '2023-09-12 10:04:00', 27.7,1,1),
(6, '2023-09-12 10:05:00', 27.3,1,1),

(7, '2023-09-12 10:00:00', 27.3,2,1),
(8, '2023-09-12 10:01:00', 28.1,2,1),
(9, '2023-09-12 10:02:00',28.6,2,1),
(10, '2023-09-12 10:03:00', 28.0,2,1),
(11, '2023-09-12 10:04:00', 27.7,2,1),
(12, '2023-09-12 10:05:00', 27.3,2,1),

(13, '2023-09-12 10:00:00', 27.3,3,1),
(14, '2023-09-12 10:01:00', 28.1,3,1),
(15, '2023-09-12 10:02:00', 28.6,3,1),
(16, '2023-09-12 10:03:00', 28.0,3,1),
(17, '2023-09-12 10:04:00', 27.7,3,1),
(18, '2023-09-12 10:05:00',  27.3,3,1),

(19, '2023-09-12 10:00:00', 35.7,4,1),
(20, '2023-09-12 10:01:00', 35.9,4,1),
(21, '2023-09-12 10:02:00',  36.3,4,1),
(22, '2023-09-12 10:03:00',  37,4,1),
(23, '2023-09-12 10:04:00',  36.2,4,1),
(24, '2023-09-12 10:05:00',  35.7,4,1),
(25, '2023-09-12 10:15:00', 50.2, 7,2),
(26, '2023-09-12 10:25:00', 52.0, 7,2),
(27, '2023-09-12 10:35:00', 51.5, 7,2);
