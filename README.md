# API_REST
Para criar as tabelas no MYSQL acesse o arquivo no diretório **../models/sql_codes.sql** e cole no seu MYSQL terminal ou WORKBENCH.
## Iniciar o Servidor
Execute **node app.js** para inicializar o servidor.
## SQL COMMANDS
Dentro do arquivo **../models/db.js** existem algumas funções com comandos sql básicos, caso queira implementar mais, basta adicionar no **module.exports** e importar na rota desejada.
#### allBooks()
* Retorna todas as informações de *todos os livros cadastrados*.
#### byId(idDoLivro)
* Retorna todas as informações de um único livro através do seu *id*.
#### byAuthor(autorDoAutor)
* Retorna todas as informações de todos os livros criados pelo autor passado no parâmetro.
#### upBookGen(idDoLivro, generoDoLivro)
* Atualiza o genero de um livro específico pelo seu id.
#### delBook(idDoLivro)
* Exclui totalmente um livro da linha da tabela.
#### newBook(titulo, subTitulo, autor, genero, ano)
* Cadastra um novo livro
##
As funções assíncronas **new, up e del** *são exclusivas da rota admin*.
##
