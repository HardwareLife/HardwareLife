USE HardwareLife;

INSERT INTO administrador VALUES
(null, 'matheus.kikuti@hardwarelife.com','Matheus Kikuti','123'),
(null, 'gustavo.henrique@hardwarelife.com', 'Gustavo Henrique', '123'),
(null, 'victor.leonel@hardwarelife.com','Victor Leonel','123'),
(null, 'ian.silva@hardwarelife.com','Ian Silva','123'),
(null, 'kaique.volpe@hardwarelife.com','Kaique Volpe','123'),
(null, 'kelvin.christian@hardwarelife.com','Kelvin Christian','123');

INSERT INTO empresa VALUES
(null, '06.990.590/0001-23', 'AV. Brigadeiro Faria Lima','3900','Pinheiros','São Paulo','SP','04538-133','Google Brasil','Google Brasil Internet LTDA','GOOGLEBRASIL@GOOGLE.COM', '11 23958400', '1', '6'),
(null, '00.623.904/0001-73', 'Rodovia Vice-Prefeito Hermenegildo Tonolli','1500','Distrito Industrial','Jundiaí','SP','13213-086','Apple Brasil','Apple Computer Brasil Ltda.','FISCAL@APPLE.COM','11 55030000', '2', '12');

INSERT INTO funcionario_empresa VALUES
(null, 'joão.henrique@GOOGLE.COM','João Henrique','951.403.008-77','123', 2),
(null, 'maria.eduarda@APPLE.COM','Maria Eduarda','328.587.718-98','123', 1);

INSERT INTO sensor VALUES
(null, 'DHT11',0 ,3,2,6, 1),
(null, 'DHT11',0,3,2, 5, 1),
(null, 'DHT11',0,3,2, 4, 1),
(null, 'DHT11',0,3,2, 3, 1),
(null, 'DHT11',0,3,2, 2, 1),
(null, 'DHT11',0 ,3,2,1, 1),

(null, 'DHT11',0 ,3,2,6, 2),
(null, 'DHT11',0 ,3,2,5, 2),
(null, 'DHT11',0 ,3,2,4, 2),
(null, 'DHT11',0 ,3,2,3, 2),
(null, 'DHT11',0 ,3,2,2, 2),
(null, 'DHT11',0 ,3,2,1, 2),

(null, 'MX1102',0 ,1,4,6, 2),
(null, 'MX1102',0 ,1,4,5, 2),
(null, 'MX1102',0 ,1,4,4, 2),
(null, 'MX1102',0 ,1,4,3, 2),
(null, 'MX1102',0 ,1,4,2, 2),
(null, 'MX1102',0 ,1,4,1, 2);

INSERT INTO dados VALUES
(null, '2023-09-12 10:00:00', 27.3, null,1, 1),
(null, '2023-09-12 10:01:00',  28.1, null,1, 2),
(null, '2023-09-12 10:02:00', 28.6, null,1, 3),
(null, '2023-09-12 10:03:00', 28.0, null,1, 1),
(null, '2023-09-12 10:04:00', 27.7, null,1, 2),
(null, '2023-09-12 10:05:00', 27.3, null,1, 3),

(null, '2023-09-12 10:00:00', 27.3, null,1, 4),
(null, '2023-09-12 10:01:00', 28.1, null,1, 5),
(null, '2023-09-12 10:02:00',28.6, null,1, 6),
(null, '2023-09-12 10:03:00', 28.0, null,1, 4),
(null, '2023-09-12 10:04:00', 27.7, null,1, 5),
(null, '2023-09-12 10:05:00', 27.3, null,1, 6),

(null, '2023-09-12 10:00:00', 27.3, null,1, 7),
(null, '2023-09-12 10:01:00', 28.1, null,1, 8),
(null, '2023-09-12 10:02:00', 28.6, null,1, 9),
(null, '2023-09-12 10:03:00', 28.0, null,1, 10),
(null, '2023-09-12 10:04:00', 27.7, null,1, 11),
(null, '2023-09-12 10:05:00',  27.3, null,1, 12),

(null, '2023-09-12 10:00:00', 35.7, 42.6,2, 13),
(null, '2023-09-12 10:01:00', 35.9, 42.6,2, 14),
(null, '2023-09-12 10:02:00',  36.3, 42.6,2, 15),
(null, '2023-09-12 10:03:00',  37, 42.6,2, 16),
(null, '2023-09-12 10:04:00',  36.2, 42.6,2, 17),
(null, '2023-09-12 10:05:00',  35.7, 42.6,2, 18);