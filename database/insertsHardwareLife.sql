USE HardwareLife;

INSERT INTO empresa VALUES
(null, '06.990.590/0001-23' ,'Google Brasil','Google Brasil Internet LTDA','GOOGLEBRASIL@GOOGLE.COM', '11 23958400', '5', '25'),
(null, '00.623.904/0001-73','Apple Brasil','Apple Computer Brasil Ltda.','FISCAL@APPLE.COM','11 55030000', '4', '20');


INSERT INTO endereco VALUES 
(null, 'AV. Brigadeiro Faria Lima','3900','Pinheiros','São Paulo','SP','04538-133', 1),
(null, 'Rodovia Vice-Prefeito Hermenegildo Tonolli','1500','Distrito Industrial','Jundiaí','SP','13213-086', 2);

INSERT INTO funcionario_empresa VALUES
(null, 'leonardo.arakaki@hardwarelife.com','Leonardo Arakaki', '951.403.008-76', true,'123', null),
(null, 'willians.vinicius@hardwarelife.com','Willians Vinicius', '951.403.008-75',  true,'123', null),
(null, 'giovanna.franca@hardwarelife.com','Giovanna França','951.403.008-74', true,'123', null),
(null, 'ian.silva@hardwarelife.com','Ian Silva', '951.403.008-73', true,'123', null),
(null, 'julia.camargo@hardwarelife.com', 'Julia Camargo','951.403.008-72', true,'123', null),
(null, 'ana.beatriz@hardwarelife.com', 'Ana Beatriz','951.403.008-71', true,'123', null),
(null, 'joão.henrique@GOOGLE.COM','João Henrique','951.403.008-77', false,'123', 2),
(null, 'maria.eduarda@APPLE.COM','Maria Eduarda','328.587.718-98', false,'123', 1);

INSERT INTO sala VALUES 
(null, 'Google_SP_Pinheiros01', 1), 
(null, 'Apple_SP_Jundiaí01', 2), 
(null, 'Google_SP_Pinheiros02', 1), 
(null, 'Apple_SP_Jundiaí02', 2);

INSERT INTO rack VALUES 
(null, 1, 1), (null, 2, 1),
(null, 1, 2), (null, 2, 2),
(null, 1, 3), (null, 2, 3),
(null, 1, 4), (null, 2, 4);


INSERT INTO sensor VALUES
(null, 'LM35',1, 1, 1, 1), (null, 'LM35',1, 2, 1, 1), (null, 'LM35',1, 1, 2, 1), (null, 'LM35',1, 2, 2, 1), (null, 'LM35',1, 1, 3, 1),(null, 'LM35',1, 2, 3, 1),

(null, 'LM35',2, 1, 1, 2),(null, 'LM35',2, 2, 1, 2),(null, 'LM35',2, 1, 2, 2),(null, 'LM35',2, 2, 2, 2),(null, 'LM35',2, 1, 3, 2),(null, 'LM35',2, 2, 3, 2),

(null, 'LM35',3, 1, 1, 3),(null, 'LM35',3, 2, 1, 3),(null, 'LM35',3, 1, 2, 3),(null, 'LM35',3, 2, 2, 3),(null, 'LM35',3, 1, 3, 3),(null, 'LM35',3, 2, 3, 3),

(null, 'LM35',4, 1, 1, 4),(null, 'LM35',4, 2, 1, 4),(null, 'LM35',4, 1, 2, 4),(null, 'LM35',4, 2, 2, 4),(null, 'LM35',4, 1, 3, 4),(null, 'LM35',4, 2, 3, 4),

(null, 'LM35',5, 1, 1, 5),(null, 'LM35',5, 2, 1, 5),(null, 'LM35',5, 1, 2, 5),(null, 'LM35',5, 2, 2, 5),(null, 'LM35',5, 1, 3, 5),(null, 'LM35',5, 2, 3, 5),

(null, 'LM35',6, 1, 1, 6),(null, 'LM35',6, 2, 1, 6),(null, 'LM35',6, 1, 2, 6),(null, 'LM35',6, 2, 2, 6),(null, 'LM35',6, 1, 3, 6),(null, 'LM35',6, 2, 3, 6),

(null, 'LM35',7, 1, 1, 7),(null, 'LM35',7, 2, 1, 7),(null, 'LM35',7, 1, 2, 7),(null, 'LM35',7, 2, 2, 7),(null, 'LM35',7, 1, 3, 7),(null, 'LM35',7, 2, 3, 7),

(null, 'LM35',8, 1, 1, 8),(null, 'LM35',8, 2, 1, 8),(null, 'LM35',8, 1, 2, 8),(null, 'LM35',8, 2, 2, 8),(null, 'LM35',8, 1, 3, 8),(null, 'LM35',8, 2, 3, 8);

INSERT INTO dados VALUES
(1, '2023-09-12 10:00:00', 27.3, null,1),
(2, '2023-09-12 10:01:00',  28.1, null,1),
(3, '2023-09-12 10:02:00', 28.6, null,1),
(4, '2023-09-12 10:03:00', 28.0, null,1),
(5, '2023-09-12 10:04:00', 27.7, null,1),
(6, '2023-09-12 10:05:00', 27.3, null,1),

(7, '2023-09-12 10:00:00', 27.3, null,2),
(8, '2023-09-12 10:01:00', 28.1, null,2),
(9, '2023-09-12 10:02:00',28.6, null,2),
(10, '2023-09-12 10:03:00', 28.0, null,2),
(11, '2023-09-12 10:04:00', 27.7, null,2),
(12, '2023-09-12 10:05:00', 27.3, null,2),

(13, '2023-09-12 10:00:00', 27.3, null, 3),
(14, '2023-09-12 10:01:00', 28.1, null, 3),
(15, '2023-09-12 10:02:00', 28.6, null, 3),
(16, '2023-09-12 10:03:00', 28.0, null, 3),
(17, '2023-09-12 10:04:00', 27.7, null, 3),
(18, '2023-09-12 10:05:00',  27.3, null, 3),

(19, '2023-09-12 10:00:00', 35.7, null, 4),
(20, '2023-09-12 10:01:00', 35.9, null, 4),
(21, '2023-09-12 10:02:00',  36.3, null, 4),
(22, '2023-09-12 10:03:00',  37, null, 4),
(23, '2023-09-12 10:04:00',  36.2, null, 4),
(24, '2023-09-12 10:05:00',  35.7, null,4);