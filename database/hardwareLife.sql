CREATE DATABASE HardwareLife;

USE HardwareLife;

 -- TABELA PARA ADMINISTRAÇÃO -- 
 
CREATE TABLE administrador(
	id_admin int primary key auto_increment,
    email_admin varchar(40),
    nome_admin varchar(40),
    senha varchar(40)
);

 -- TABELA PARA CONTROLE E CADASTRO DE EMPRESAS CLIENTES --
 
 CREATE TABLE empresa(
	id_empresa int primary key auto_increment,
	cnpj char(18),
    logradouro varchar(60),
    numero varchar(10),
    bairro varchar(60),
    cidade varchar(60),
    uf char(2),
    cep char(9),
    nome_empresa varchar(50),
    razao_social varchar(100),
    email_empresa varchar(50),
    telefone_empresa varchar(12),
    qtdSala varchar(15),
    qtdRacks varchar(70)
 );

 -- TABELA PARA CONTROLE E LOGIN DE CLEINTES --
 
CREATE TABLE funcionario_empresa(
	id_funcionario_empresa int primary key auto_increment,
    email_funcionario_empresa varchar(50),
    nome_funcionario_empresa varchar(40),
    cpf char(14),
    senha varchar(40),
	fk_empresa int,
     constraint foreign key (fk_empresa) references empresa(id_empresa)
);

-- TABELA DO SENSOR

CREATE TABLE sensor(
    idSensor int primary key auto_increment,
    nome_sensor varchar(40),
    pos_x_sensor int,
    pos_y_sensor int,
    pos_z_sensor int,
    numero_rack int,
    fk_empresa_sensor int,
    constraint foreign key (fk_empresa_sensor) references empresa(id_empresa)
);

 -- TABELA DE DADOS DO SENSOR --

CREATE TABLE dados(
	idDados int primary key auto_increment,
    data_hora dateTime default current_timestamp,
    temperatura double,
    umidade double,
    numero_sala int,
    fk_sensor int,
    constraint foreign key (fk_sensor) references sensor(idSensor)
);

DROP TABLE dados;
