create database step_up;
-- drop database step_up;
use step_up;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(80),
estilodedanca varchar(80),
idade int,
email varchar(100),
senha varchar(65)
);

create table looks(
idLook int primary key auto_increment,
descricao varchar(200),
genero char(1),
nome varchar(45)
);

create table voto(
idVotos int auto_increment,
fkUsuario int,
foreign key (fkUsuario)
references usuario(idUsuario),
fkLook int,
foreign key (fkLook)
references looks(idLook),
primary key (idVotos,fkUsuario,fkLook),
date datetime
);

create table quiz(
idQuiz int auto_increment,
pontos int,
fkUsuario int,
foreign key (fkUsuario)
references usuario(idUsuario),
primary key (idQuiz, fkUsuario)
);

 INSERT INTO usuario (nome, estilodedanca, idade, email, senha) VALUES 
 ('duda', 'hip-hop', 20, 'duda@duda.com', 123);
 
 
 insert into looks values
 (null,'Classico, com a blusa de manga curta na cor amarela e calça preta','F','Look 1'),
 (null,'Classico, com a blusa de manga curta na cor branca e calça bege','F','Look 2'),
 (null,'Classico, com a blusa de manga curta na cor preta com estampa laranja e calça preta','F','Look 3'),
 (null,'Classico, com a blusa de manga curta na cor branca com estampa laranja e verde e calça marrom','F','Look 4'),
 (null,'Classico, com a blusa de manga comprida quadriculada na cor amarela e marrom e calça bege','M','Look 5'),
 (null,'Classico, com a blusa de manga comprida quadriculada na cor azul e calça cinza escuro','M','Look 6'),
 (null,'Classico, com a blusa na cor branca estampada e shorts estampado/listrado na cor preta','M','Look 7'),
 (null,'Classico, com a blusa na cor branca e um conjunto moletom cor bege calça e blusa de frio','M','Look 8');
 
INSERT INTO voto VALUES(NULL, 1, 1, DEFAULT);
INSERT INTO voto VALUES(NULL, 1, 2, now());
INSERT INTO voto VALUES(NULL, '2022-11-29', 1, 6);

select * from usuario;
select * from looks;
select * from  voto;
select * from quiz;

select count(*) as quantidade, l.nome as descricao
from looks l
join voto v ON l.idLook = v.fkLook
where l.genero = 'F'
group by l.descricao;

select count(*) as quantidade, l.nome as descricao
from looks l
join voto v ON l.idLook = v.fkLook
where l.genero = 'M'
group by l.descricao;

select count(idQuiz) as qtd_tentativas 
from quiz q
join usuario u on u.idUsuario = q.fkusuario
group by u.idUsuario;

select count(idQuiz) as qtd_tentativas 
from quiz q
join usuario u on u.idUsuario = q.fkusuario
group by u.idUsuario;

 update looks 
 set nome = 'Look 8'
 where idLook = 8;
 
select * from quiz;
 
 