USE HardwareLife;

-- CONSULTAS QUE SERÃO COMUNS
SELECT data_hora, nome_sensor, pos_x_sensor as x, pos_y_sensor as y, pos_z_sensor as z, temperatura, umidade FROM dados WHERE pos_x_sensor = 3 AND pos_y_sensor = 2 ORDER BY data_hora DESC;
SELECT cnpj, nome_empresa, email_empresa, telefone_empresa FROM empresa;

-- CONSULTAS PARA LOGIN
SELECT email_funcionario_empresa, senha FROM funcionario_empresa;
SELECT email_admin, senha FROM administrador;

-- FAZER INNER JOINS
select * from empresa join endereco 
	on idEmpresa = fkEmpresa;
    
select * from empresa join funcionario_empresa
	on idEmpresa = fk_empresa;

select * from empresa join endereco 
	on idEmpresa = fkEmpresa
		join funcionario_empresa as f
			on idEmpresa = fk_empresa;
            
select * from sala join empresa
	on idEmpresa = fkEmpresa;

select * from sala join rack
	on idSala = fkSala;
    
select * from sala join empresa
	on idEmpresa = fkEmpresa
		join rack
			on idSala = fkSala;
            
select * from rack join sensor
	on idRack = fkRack;
    
select * from sala join rack
	on idSala = fkSala
		join sensor 
			on idRack = fkRack;
            
select * from sensor join dados
	on idSensor = fkSensor;

select * from rack join sensor
	on idRack = fkRack
		join dados 
			on idSensor = fkSensor;