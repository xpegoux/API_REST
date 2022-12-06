require('dotenv').config();

//criando conexão com base de dados!
const connect = async () => {
    if (global.connection && global.connection.state != 'disconnected')
        return global.connection;

    const mysql = require('mysql2/promise')
    const con = mysql.createConnection({
        host:     process.env.HOST,
        user:     process.env.USER,
        password: process.env.PASS,
        database: process.env.DB
    });
    console.log(`\tBanco Conectado!\n`);
    global.connection = con;
    return con;
}

//QUERYS

//mostrar todos os livros
const allBooks = async () => {
    const con = await connect();
    const [rows] = await con.query('SELECT * FROM LIVRO;');
    return rows;
}

//filtrar livros por id
const byId = async (id) => {
    const con = await connect();
    const [rows] = await con.query(`
    SELECT * 
    FROM LIVRO 
    WHERE IDLIVRO = ${id};`);
    return rows;
}

//filtrar por autor
const byAuthor = async (autor) => {
    const con = await connect();
    const [rows] = await con.query(`
    SELECT * 
    FROM LIVRO
    WHERE AUTOR LIKE '%${autor}%'
    ORDER BY ANO;`);
    return rows;
}

//atualizar/editar livro existente
const upBookGen = async (id, genero) => {
    const con = await connect();
    const [rows] = await con.query(`
    UPDATE LIVRO SET GENERO = "${genero}"
    WHERE IDLIVRO = ${id};`);
    return rows;
}

//excluir livro existente
const delBook = async (id) => {
    const con = await connect();
    const [rows] = await con.query(`
    DELETE FROM LIVRO
    WHERE IDLIVRO = ${id};`);
    return rows;
}

//cadastrar novo livro
const newBook = async (titulo, subTitulo, autor, genero, ano) => {
    const con = await connect();
    const [rows] = await con.query(`
    INSERT INTO LIVRO (TITULO, SUBTITULO, AUTOR, GENERO, ANO)
    VALUES ("${titulo}", "${subTitulo}", "${autor}", "${genero}", "${ano}");`);
    return rows;
}

module.exports = {
    allBooks,
    byId,
    byAuthor,
    newBook,
    upBookGen,
    delBook
}