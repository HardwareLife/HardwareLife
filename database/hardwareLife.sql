CREATE DATABASE HardwareLife;

USE HardwareLife;

 -- TABELA PARA CONTROLE E CADASTRO DE EMPRESAS CLIENTES --
 
 CREATE TABLE empresa(
	idEmpresa int primary key auto_increment,
	cnpj char(18),
    nomeEmpresa varchar(50),
    razaoSocial varchar(100),
    emailEmpresa varchar(50),
    telefoneEmpresa varchar(12),
    qtdSala varchar(15),
    qtdRacks varchar(70)
 );
 
CREATE TABLE sala(
	idSala INT PRIMARY KEY AUTO_INCREMENT,
	nomeSala varchar(40),
    fkEmpresa int,
    CONSTRAINT fkEmpresaSala FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa)
);

 CREATE TABLE endereco(
	idEndereco int primary key auto_increment,
	logradouro varchar(60),
    numero varchar(10),
    bairro varchar(60),
    cidade varchar(60),
    uf char(2),
    cep char(9),
    fkEmpresa int,
    CONSTRAINT fkEmpresaEndereco FOREIGN KEY (fkEmpresa) REFERENCES Empresa(idEmpresa)
 );

 -- TABELA PARA CONTROLE E LOGIN DE CLEINTES --
 
CREATE TABLE funcionario_empresa(
	idFuncionario int primary key auto_increment,
    emailFuncionario varchar(50),
    nomeFuncionario varchar(40),
    cpf char(14),
    senha varchar(40),
    administrador boolean,
	fk_empresa int,
	constraint fkEmpresaFuncionario foreign key (fk_empresa) references empresa(idEmpresa)
);

CREATE TABLE rack(
	idRack int primary key auto_increment,
    numeroRack int,
    fkSala int,
    CONSTRAINT fkSala FOREIGN KEY (fkSala) REFERENCES sala(idSala)
);

-- TABELA DO SENSOR

CREATE TABLE sensor(
    idSensor int primary key auto_increment,
    nome_sensor varchar(40),
    pos_x_sensor int,
    pos_y_sensor int,
    pos_z_sensor int,
    fkRack int,
    CONSTRAINT fkRack FOREIGN KEY (fkRack) REFERENCES rack(idRack)
);

 -- TABELA DE DADOS DO SENSOR --

CREATE TABLE dados(
	idDados int,
    dataHora dateTime default current_timestamp,
    temperatura double,
    umidade double,
    fk_sensor int,
    primary key(idDados, fk_sensor),
    constraint fkSensor foreign key (fk_sensor) references sensor(idSensor)
);

