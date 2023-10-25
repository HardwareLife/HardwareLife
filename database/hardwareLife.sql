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
 
CREATE TABLE sala(
	idSala INT PRIMARY KEY AUTO_INCREMENT,
	numeroSala int,
    fkEndereco int,
    CONSTRAINT fkEnderecoSala FOREIGN KEY (fkEndereco) REFERENCES endereco(idEndereco)
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
 
CREATE TABLE usuario(
	idUsuario int primary key auto_increment,
    email varchar(50),
    senha varchar(40),
    administrador boolean,
	fkEmpresa int,
	constraint fkEmpresaFuncionario foreign key (fkEmpresa) references empresa(idEmpresa)
);

CREATE TABLE rack(
	idRack int primary key auto_increment,
    numeroRack int,
    fkSala int,
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


CREATE TABLE unidade(
    idUnidade int primary key auto_increment,
    unidadeDeMedida varchar(45)
);

 -- TABELA DE DADOS DO SENSOR --

CREATE TABLE dados(
	idDados int auto_increment,
    dataHora dateTime default current_timestamp,
	valor double,
    fk_sensor int,
    fkUnidade int,
    primary key(idDados, fk_sensor),
    constraint fkSensor foreign key (fk_sensor) references sensor(idSensor),
	constraint fkUnidade foreign key (fkUnidade) references unidade(idUnidade)
);

