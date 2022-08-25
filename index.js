//libs
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

//middleware
const restrict = require(`./middlewares/restrict`);

//route
const adm = require('./route/adm');
const page = require('./route/pages');

//server
const server = express();
const port = process.env.PORT || 8080;

//view engine 
server.set(`view engine`, `ejs`);

//header & cors
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') //quem pode acessar a api
    res.header('Acess-Control-Allow-Headers', 'Origin,X-Requrested-With ,Content-Type, Accept,Autorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATH,DELETE,GET') //CRUD
        return res.status(200).send({}); //resposta
    }
    next();
})

//session
server.use(session({ secret: 'adkaskfaokfoaskfoakf', resave: true, saveUninitialized: true }))
server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(express.static(__dirname + '/public'));

//rota adm
server.use('/admin', restrict, adm)
server.use('/', page)
    //admin

server.use((req, res, next) => {
    const erro = new Error("not found");
    erro.status = 404;
    next(erro);
})

server.use((erro, req, res, next) => {
    res.status(erro.status || 500)
    return res.render('erro.ejs', { erro: erro.status, msg: erro })



})









server.listen(port, () => { console.log(`servidor funcionando na porta ${port}`) })