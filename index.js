const express = require('express');
const server = express();
const morgan = require('morgan');
const adm = require('./routes/adm')
const pages = require('./Pages')
const route = require('./routes/rote');
const port = 8080;
const session = require('express-session')

server.use(session({ secret: 'adkaskfaokfoaskfoakf', resave: true, saveUninitialized: true }))


//header


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')//quem pode acessar a api
    res.header('Acess-Control-Allow-Headers', 'Origin,X-Requrested-With ,Content-Type, Accept,Autorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATH,DELETE,GET')//CRUD
        return res.status(200).send({});//resposta
    }


    next();

}


)
server.use((req, res, next) => {
    res.locals.admin = false;
    next()
})


server.use(morgan('dev'))
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(express.json())
server.use('/', pages);
server.use('/jojostands', route);
server.use('/admin', adm);

server.use((req, res, next) => {
    const erro = new Error("Não encontrado");
    erro.status = 404;
    next(erro);
})


server.use((erro, req, res, next) => {
    res.status(erro.status || 500)
    return res.send(`
    <head>
   <title>ERRO ${erro.status} </title>
    </head>
    <body>
    <h1>erro ${erro.status}</h1> 
    <img src="https://toppng.com/public/uploads/thumbnail/kono-dio-da-jojo-dio-11562871580glkom16en7.png">
    <p>
   
    você achou que ia char uma pagina, mas achou eu ERRO ${erro.status}!
    </p> 
    <hr>
    <p>
    ${erro}
    </p>
    
    recarregue a pagina ou volte para a home

    </body>`)



})









server.listen(port, () => { console.log(`servidor funcionando na porta ${port}`) })