const { allBooks, byId, byAuthor } = require('./models/db')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const admin = require('./routes/admin')

const app = express()
const PORTA = 8081

	//Config Cors
app.use(cors())

	//Config Body Parser
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

    //Error on Server Side
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Algo está errado :$')
})

//Rotas
	//Ver livros cadastrados
app.get('/book', async (req, res) => {
    const mostrarLivros = await allBooks()
	if (mostrarLivros) {
        res.status(200).send(mostrarLivros)
	} else {
		res.sendStatus(204)
    }
  })

	//Filtrar livros por id
app.get('/book/ver/:id', async (req, res)=>{
    let id = req.params.id
    const porId = await byId(id)
    
    if (id > 0 && id <= porId){
        res.status(200).send(porId)
    } 
    else {
        res.status(404)
    }
})

//Filtrar livros por nome
app.get('/book/ver/autor/:nome', async (req, res)=>{
    let nome = req.params.nome
    const porAutor = await byAuthor(nome)
    
    res.send(porAutor)
})

app.use('/admin', admin)

//Verificação not found
app.all('*', (req, res)=>{
    res.status(404).send("Página não encontrada")
})
  
  //Port connection
app.listen(PORTA,() =>{
	console.log(`Servidor Ativo: http://localhost:${PORTA}`)
})