const express = require('express')
const { newBook, upBookGen, delBook } = require('../models/db')

// componente para criar rotas em arquivos separados
const router = express.Router() 
    
    
//Cad livros
router.post('/book/add', async (req, res) => {
    const { titulo, subTitulo, autor, genero, ano } = req.body
    const novoLivro = await newBook(titulo, subTitulo, autor, genero, ano)
    
    res.status(201).send("Livro cadastrado com sucesso!") //status code created 
})

//Editar livros
router.put('/book/editar/:id', async (req, res) => {
    let id = req.params.id
    const { genero } = req.body
    const editar = await upBookGen(id, genero)
    if (id > 0 && id <= editar){
        res.status(200).send("Gênero editado com sucesso!")
    } else {
        res.status(404)
    }
})
    //Deletar livros
router.delete('/book/deletar/:id', async (req, res) => {
    let id = req.params.id
    const deletar = await delBook(id)
    if (id > 0 && id <= deletar){
        res.status(200).send("Livro removido com sucesso!")
    } else {
        res.status(404)
    }
})

//Verificação not found
router.all('*', (req, res) => {
    res.status(404).send("Página não encontrada")
})

module.exports = router