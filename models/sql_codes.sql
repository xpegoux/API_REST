create database livraria;
use livraria;

create table livro (
	idLivro smallint auto_increment not null primary key,
    titulo varchar(255) not null,
    subTitulo varchar(255) not null,
    autor varchar(255) not null,
    genero varchar(255) not null,
    ano date not null
);

insert into livro (titulo, subTitulo, autor, genero, ano) values
	('BRIDGERTON', 'O Duque & Eu', 'Julia Quinn', 'Romance de amor, Ficção histórica', '2013-04-03'),
    ('BRIDGERTON', 'O Visconde que me amava', 'Julia Quinn', 'Romance de amor, Ficção histórica', '2013-08-14'),
    ('O Senhor dos Anéis', 'A Sociedade do Anel', 'J. R. R. Tolkien', 'Literatura Fantástica, Obra de referência', '1954-07-29'),
    ('O Senhor dos Anéis', 'O Retorno do Rei', 'J. R. R. Tolkien', 'Literatura Fantástica, Obra de referência', '1955-10-20');