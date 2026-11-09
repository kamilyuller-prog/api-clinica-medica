create database clinicaMedica; 
use clinicaMedica;

create table medico (
id_medico int primary key auto_increment,
nome varchar(150) not null,
crm varchar(6) not null,
especialidade varchar(50) not null
);

create table paciente (
id_paciente int primary key auto_increment,
nome varchar(150) not null,
cpf varchar(11) not null unique,
data_nascimento date not null
);

create table consulta (
id_consulta int primary key auto_increment,
data_hora datetime not null,
motivo text null,
status_consuta enum('rascunho','agendada', 'concluida','cancelada'),
fk_id_medico int not null,
fk_id_paciente int not null,

foreign key (fk_id_medico) references medico (id_medico),
foreign key (fk_id_paciente) references paciente (id_paciente)
);
