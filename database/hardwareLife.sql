CREATE DATABASE HardwareLife;

USE HardwareLife;

 -- TABELA PARA CONTROLE E CADASTRO DE EMPRESAS CLIENTES --
 
 CREATE TABLE empresa(
	idEmpresa int primary key auto_increment,
	cnpj char(18),
    nomeEmpresa varchar(50),
    razaoSocial varchar(100),
    emailEmpresa varchar(50),
    telefoneEmpresa varchar(12)
);

CREATE TABLE datacenter(
	idDatacenter int primary key auto_increment,
	logradouro varchar(60),
    numero varchar(10),
    bairro varchar(60),
    cidade varchar(60),
    uf char(2),
    cep char(9),
    fkEmpresa int not null,
    CONSTRAINT fkEmpresaDatacenter FOREIGN KEY (fkEmpresa) REFERENCES Empresa(idEmpresa)
 );
 
CREATE TABLE sala(
	idSala INT PRIMARY KEY AUTO_INCREMENT,
	numeroSala int,
    fkDatacenter int not null,
    CONSTRAINT fkDatacenterSala FOREIGN KEY (fkDatacenter) REFERENCES datacenter(idDatacenter)
);

 -- TABELA PARA CONTROLE E LOGIN DE CLEINTES --
 
CREATE TABLE usuario(
	idUsuario int primary key auto_increment,
    email varchar(50),
    senha varchar(40),
    administrador boolean,
	fkDatacenter int,
	constraint fkDatacenter foreign key (fkDatacenter) references datacenter(idDatacenter)
);

CREATE TABLE rack(
	idRack int primary key auto_increment,
    numeroRack int,
    fkSala int not null,
    CONSTRAINT fkSala FOREIGN KEY (fkSala) REFERENCES sala(idSala)
);

-- TABELA DO SENSOR

CREATE TABLE sensor(
    idSensor int auto_increment,
    nome_sensor varchar(40),
    tipoSensor varchar(40),
    pos_x_sensor int,
    pos_y_sensor int,
    pos_z_sensor int,
    fkRack int,
    primary key(idSensor, fkRack),
    CONSTRAINT fkRack FOREIGN KEY (fkRack) REFERENCES rack(idRack)
);

 -- TABELA DE DADOS DO SENSOR --
 
CREATE TABLE dados(
	idDados int auto_increment,
    dataHora dateTime default current_timestamp,
	temperatura float,
    umidade float,
    fk_sensor int,
    fkRack int,
    primary key(idDados, fk_sensor, fkRack),
    constraint fkSensor foreign key (fk_sensor) references sensor(idSensor),
    constraint fkRackDados foreign key (fkRack) references sensor (fkRack)
);

