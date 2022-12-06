const { allBooks, byId, byAuthor } = require('../models/db');


let appRouter = async (app) => {

    //Ver livros cadastrados
    app.get('/book', async (req, res) => {
        const mostrarLivros = await allBooks();
        if (mostrarLivros) {
            res.status(200).send(mostrarLivros);
        } else {
            res.sendStatus(204);
        }
        });

        //Filtrar livros por id
    app.get('/book/ver/:id', async (req, res)=>{
        let id = req.params.id;
        const porId = await byId(id);
        
        if (id > 0 && id <= porId){
            res.status(200).send(porId);
        } 
        else {
            res.status(404);
        }
    })

    //Filtrar livros por nome
    app.get('/book/ver/autor/:nome', async (req, res)=>{
        let nome = req.params.nome;
        const porAutor = await byAuthor(nome);
        
        res.send(porAutor);
    });
    //Verificação not found
    app.all('*', (req, res)=>{
        res.status(404).send("Página não encontrada")
    });
}

module.exports = appRouter;