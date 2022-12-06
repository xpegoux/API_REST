const express = require('express');
const bodyParser = require('body-parser');
const admin = require('./routes/admin');
const routes = require('./routes/app.js');
require('dotenv').config();

const app = express();
const PORTA = process.env.PORT;

	//Config Body Parser
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

    //Error on Server Side
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo está errado :$');
});

    //Rotas
app.use('/admin', admin);
routes(app);
  
  //Port connection
app.listen(PORTA,() =>{
	console.log(`\tServidor Ativo!\n\t\tPara cancelar pressione: CTRL+C`)
})